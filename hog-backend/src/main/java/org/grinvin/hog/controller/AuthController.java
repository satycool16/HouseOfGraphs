package org.grinvin.hog.controller;

import be.ugent.caagt.dao.DataAccessException;
import org.grinvin.hog.assembler.UserModelAssembler;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.response_request_entities.LoginRequest;
import org.grinvin.hog.response_request_entities.MessageResponse;
import org.grinvin.hog.response_request_entities.PasswordResetRequest;
import org.grinvin.hog.response_request_entities.SignupRequest;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.dao.UserDAO;
import org.grinvin.hog.model.UserModel;
import org.grinvin.hog.security.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private UserModelAssembler userModelAssembler;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    @Value("${recaptcha.secretKey}")
    private String secretCaptchaKey;

    @PostMapping("/login")
    public ResponseEntity<MessageResponse> login(
            @CookieValue(name = "accessToken", required = false) String accessToken,
            @CookieValue(name = "refreshToken", required = false) String refreshToken,
            @RequestBody LoginRequest loginRequest
    ) {
        System.out.println("LOGIN");
        System.out.println(loginRequest.getEmail());
        System.out.println(loginRequest.getPassword());
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        System.out.println("reaches");
        SecurityContextHolder.getContext().setAuthentication(authentication);
        System.out.println("and here");
        String decryptedAccessToken = SecurityCipher.decrypt(accessToken);
        String decryptedRefreshToken = SecurityCipher.decrypt(refreshToken);
        return userService.login(loginRequest, decryptedAccessToken, decryptedRefreshToken);
    }


    @PostMapping("/refresh")
    public ResponseEntity<MessageResponse> refreshToken(@CookieValue(name = "accessToken", required = false) String accessToken,
                                                      @CookieValue(name = "refreshToken", required = false) String refreshToken) {
        System.out.println("REFRESH TOKEN");
        String decryptedAccessToken = SecurityCipher.decrypt(accessToken);
        String decryptedRefreshToken = SecurityCipher.decrypt(refreshToken);
        return userService.refresh(decryptedAccessToken, decryptedRefreshToken);
    }

    @GetMapping("/me")
    public ResponseEntity<UserModel> me() {
        return new ResponseEntity<>(
                userModelAssembler.toModel(userService.getUserProfile()),
                HttpStatus.OK
        );
    }

    @GetMapping("/logout")
    public ResponseEntity<MessageResponse> logout() {
        return userService.logout();
    }

    @PostMapping("/register")
    public ResponseEntity<MessageResponse> registerUser(@RequestBody SignupRequest signUpRequest) throws MessagingException, UnsupportedEncodingException {
        final String uri = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretCaptchaKey + "&response=" + signUpRequest.getRecaptcha_response();
        RestTemplate restTemplate = new RestTemplate();
        VerifyCaptchaResponse res = restTemplate.getForObject(uri, VerifyCaptchaResponse.class);
        if(res != null){
            if(!res.isSuccess()){
                return ResponseEntity.notFound().build();
            }
        }

        try (DataAccessContext dac = dap.getDataAccessContext()) {
            if (dac.getUserDAO().userExistsByEmail(signUpRequest.getEmail())) {
                System.out.println("Already exists");
                return ResponseEntity.badRequest().body(new MessageResponse(false, "This email is already linked to an account!"));
            } else {
                return userService.register(signUpRequest);
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @GetMapping("/verify")
    public ResponseEntity<MessageResponse> verifyUser(@RequestParam String token) {
        if (userService.verify(token)) {
            return ResponseEntity.ok(new MessageResponse(true, "Successful user verification"));
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse(false, "Verification failed"));
        }
    }

    @GetMapping("/pw_reset_email")
    public ResponseEntity<MessageResponse> sendPasswordResetEmail(@RequestParam String email) throws MessagingException, UnsupportedEncodingException {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            User user = dac.getUserDAO().getUserByEmail(email);
            if (user == null) {
                System.out.println("User doesnt exist");
                return ResponseEntity.badRequest().body(new MessageResponse(false, "This email is not linked to an account!"));
            }
            return userService.sendPasswordResetEmail(user);
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @PostMapping("/reset_password")
    public ResponseEntity<MessageResponse> verifyPasswordReset(@RequestBody PasswordResetRequest pwResetRequest) {
        if (userService.resetPassword(pwResetRequest)) {
            return ResponseEntity.ok(new MessageResponse(true, "Successful password reset"));
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse(false, "Pasword reset failed"));
        }
    }
}
