package org.grinvin.hog.security;

import be.ugent.caagt.dao.DataAccessException;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.dao.ActivationDAO;
import org.grinvin.hog.database.dao.UserDAO;
import org.grinvin.hog.database.entity.Activation;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.response_request_entities.LoginRequest;
import org.grinvin.hog.response_request_entities.MessageResponse;
import org.grinvin.hog.response_request_entities.PasswordResetRequest;
import org.grinvin.hog.response_request_entities.SignupRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    @Value("${spring.mail.username}")
    private String senderAddress;
    @Value("${spring.mail.sendername}")
    private String senderName;

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<MessageResponse> login(LoginRequest loginRequest, String accessToken, String refreshToken) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            String email = loginRequest.getEmail();
            User user = dac.getUserDAO().getUserByEmail(email);

            System.out.println(user);
            if(user == null){
                return ResponseEntity.ok(new MessageResponse(false, "User not found with email " + email));
            }
            if(!user.activated()){
                return ResponseEntity.ok(new MessageResponse(false, "Account hasn't been verified yet " + email));
            }

            boolean accessTokenValid = tokenProvider.validateToken(accessToken);
            System.out.println("Access token validated");
            boolean refreshTokenValid = tokenProvider.validateToken(refreshToken);
            System.out.println("Refresh token validated");

            HttpHeaders responseHeaders = new HttpHeaders();
            Token newAccessToken = null;
            Token newRefreshToken = null;
            if (!accessTokenValid && !refreshTokenValid) {
                newAccessToken = tokenProvider.generateAccessToken(user.email());
                newRefreshToken = tokenProvider.generateRefreshToken(user.email());
                addAccessTokenCookie(responseHeaders, newAccessToken);
                addRefreshTokenCookie(responseHeaders, newRefreshToken);
            }

            if (!accessTokenValid && refreshTokenValid) {
                newAccessToken = tokenProvider.generateAccessToken(user.email());
                addAccessTokenCookie(responseHeaders, newAccessToken);
            }

            if (accessTokenValid && refreshTokenValid) {
                newAccessToken = tokenProvider.generateAccessToken(user.email());
                newRefreshToken = tokenProvider.generateRefreshToken(user.email());
                addAccessTokenCookie(responseHeaders, newAccessToken);
                addRefreshTokenCookie(responseHeaders, newRefreshToken);
            }
            if(newAccessToken != null){
                System.out.println("AccessToken: " + newAccessToken.getTokenValue());
            }
            System.out.println(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
            MessageResponse messageResponse = new MessageResponse(true, "Auth successful. Tokens are created in cookie.");
            return ResponseEntity.ok().headers(responseHeaders).body(messageResponse);
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @Override
    public ResponseEntity<MessageResponse> refresh(String accessToken, String refreshToken) {
        boolean refreshTokenValid = tokenProvider.validateToken(refreshToken);
        if (!refreshTokenValid) {
            throw new IllegalArgumentException("Refresh Token is invalid!");
        }
        System.out.println("valid refresh token");
        String currentUserEmail = tokenProvider.getEmailFromToken(refreshToken);
        System.out.println(currentUserEmail);
        Token newAccessToken = tokenProvider.generateAccessToken(currentUserEmail);
        System.out.println("NewAccessToken: " + newAccessToken.getTokenValue());
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.add(HttpHeaders.SET_COOKIE, cookieUtil.createAccessTokenCookie(newAccessToken.getTokenValue(), newAccessToken.getDuration()).toString());

        MessageResponse messageResponse = new MessageResponse(true, "Auth successful. Tokens are created in cookie.");
        return ResponseEntity.ok().headers(responseHeaders).body(messageResponse);
    }

    @Override
    public User getUserProfile() {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            UserDetailsImpl customUserDetails = (UserDetailsImpl) authentication.getPrincipal();
            System.out.println("reaches");
            User user = dac.getUserDAO().getUserByEmail(customUserDetails.getUsername());
            if(user == null){
                throw new IllegalArgumentException("User not found with email " + customUserDetails.getUsername());
            }
            return user;
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @Override
    public ResponseEntity<MessageResponse> logout(){
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.add(HttpHeaders.SET_COOKIE, cookieUtil.createAccessTokenCookie(null, 0L).toString());
        responseHeaders.add(HttpHeaders.SET_COOKIE, cookieUtil.createRefreshTokenCookie(null, 0L).toString());
        MessageResponse messageResponse = new MessageResponse(true, "Logout successful");
        return ResponseEntity.ok().headers(responseHeaders).body(messageResponse);
    }

    @Override
    public ResponseEntity<MessageResponse> register(SignupRequest signupRequest) throws UnsupportedEncodingException, MessagingException {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            String encryptedPassword = passwordEncoder.encode(signupRequest.getPassword());
            int userId = dac.getUserDAO().createUser(signupRequest.getEmail(), encryptedPassword, signupRequest.getFirstname(), signupRequest.getLastname());
            String uuid = UUID.randomUUID().toString();
            LocalDateTime expiryDate = LocalDateTime.now().plusHours(24);
            int activationId = dac.getActivationDAO().createActivation(userId, expiryDate, uuid, false);
            return sendVerificationEmail(signupRequest, uuid);
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @Override
    public ResponseEntity<MessageResponse> sendVerificationEmail(SignupRequest signupRequest, String token) throws UnsupportedEncodingException, MessagingException {
        String destination = signupRequest.getEmail();
        String subject = "House of Graphs - Verify registration";
        String body =
                "Dear [[name]] <br> <br>" +
                "You have been registered for House of Graphs! <br>" +
                "You will be able to log in once your account is activated.<br> <br>" +
                "<a href=\"[[URL]]\">Click here to activate your account.</a><br><br>" +
                "Or copy and paste this URI into your browser: <br>" +
                "URL <br> <br>" +
                "House of Graphs <br>" +
                "<img src='cid:hogLogo'>";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom(senderAddress, senderName);
        helper.setTo(destination);
        helper.setSubject(subject);
        body = body.replace("[[name]]", signupRequest.getFirstname() + " " + signupRequest.getLastname());
        // TODO - update URL
        body = body.replaceAll("URL", "localhost:3000/verify?token=" + token);

        helper.setText(body, true);
        //FileSystemResource res = new FileSystemResource(new ClassPathResource("hog.png"));
        helper.addInline("hogLogo", new ClassPathResource("hog.png"));
        try {
            mailSender.send(message);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse(false, "Something went wrong while trying to send the verification email."));
        }
        return ResponseEntity.ok(new MessageResponse(true, "User registered successfully! Verification email sent"));
    }

    @Override
    public boolean verify(String verificationToken){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            UserDAO uDAO = dac.getUserDAO();
            ActivationDAO aDAO = dac.getActivationDAO();
            User user = uDAO.getUserByActivationToken(verificationToken);
            Activation activation = aDAO.getActivationByToken(verificationToken);
            if(user == null || user.activated() || activation == null || !LocalDateTime.now().isBefore(activation.expirationTime())){
                return false;
            } else {
                aDAO.deleteActivationByToken(verificationToken);
                uDAO.activateUser(user.userId());
                return true;
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @Override
    public ResponseEntity<MessageResponse> sendPasswordResetEmail(User user) throws UnsupportedEncodingException, MessagingException {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            String uuid = UUID.randomUUID().toString();
            LocalDateTime expiryDate = LocalDateTime.now().plusHours(2);
            int activationId = dac.getActivationDAO().createActivation(user.userId(), expiryDate, uuid, true);
            String destination = user.email();
            String subject = "House of Graphs - Password reset";
            String body =
                    "Dear [[name]] <br> <br>" +
                            "Forgot your password? <br>" +
                            "We received a request to reset the password for your account. <br> <br>" +
                            "<a href=\"[[URL]]\">Click here to reset your password.</a><br><br>" +
                            "Or copy and paste this URI into your browser: <br>" +
                            "URL <br> <br>" +
                            "House of Graphs <br>" +
                            "<img src='cid:hogLogo'>";

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setFrom(senderAddress, senderName);
            helper.setTo(destination);
            helper.setSubject(subject);
            body = body.replace("[[name]]", user.firstname() + " " + user.lastname());
            // TODO - update URL
            body = body.replaceAll("URL", "localhost:3000/reset_password?token=" + uuid);

            helper.setText(body, true);
            helper.addInline("hogLogo", new ClassPathResource("hog.png"));

            try {
                mailSender.send(message);
            } catch (Exception e) {
                return ResponseEntity.badRequest().body(new MessageResponse(false, "Something went wrong while trying to send the password reset email."));
            }

            return ResponseEntity.ok(new MessageResponse(true, "Password reset email sent!"));
        } catch (Exception e) {
            throw new DataAccessException(e);
        }

    }

    @Override
    public boolean resetPassword(PasswordResetRequest passwordResetRequest){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            UserDAO uDAO = dac.getUserDAO();
            ActivationDAO aDAO = dac.getActivationDAO();
            User userByEmail = uDAO.getUserByEmail(passwordResetRequest.getEmail());
            User userByToken = uDAO.getUserByActivationToken(passwordResetRequest.getToken());
            Activation activation = aDAO.getActivationByToken(passwordResetRequest.getToken());
            if(userByEmail == null || userByToken == null || activation == null || userByToken.userId() != userByEmail.userId() ||
                    !LocalDateTime.now().isBefore(activation.expirationTime()) || !activation.pwReset()){
                return false;
            } else {
                aDAO.deleteActivationByToken(passwordResetRequest.getToken());
                uDAO.updatePassword(userByEmail.userId(), passwordEncoder.encode(passwordResetRequest.getPassword()));
                return true;
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @Override
    public boolean sendAccountDeletionEmail(User user, boolean adminDeleted) throws UnsupportedEncodingException, MessagingException {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            dac.getActivationDAO().deleteActivationByUserId(user.userId());
            String destination = user.email();
            String subject = "House of Graphs - Account deletion";
            String body = "";
            if(adminDeleted) {
                body = "Dear [[name]] <br> <br>" +
                        "Your House of Graphs account has been deleted by an administrator. <br> <br>" +
                        "House of Graphs <br>" +
                        "<img src='cid:hogLogo'>";
            } else {
                body = "Dear [[name]] <br> <br>" +
                        "We received a request to delete your account. <br>" +
                        "Your account of House of Graphs has been successfully deleted. <br> <br>" +
                        "House of Graphs <br>" +
                        "<img src='cid:hogLogo'>";
            }

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setFrom(senderAddress, senderName);
            helper.setTo(destination);
            helper.setSubject(subject);
            body = body.replace("[[name]]", user.firstname() + " " + user.lastname());
            helper.setText(body, true);
            helper.addInline("hogLogo", new ClassPathResource("hog.png"));
            try {
                mailSender.send(message);
            } catch (Exception e) {
                return false;
            }
            return true;
        } catch (Exception e) {
            throw new DataAccessException(e);
        }

    }

    private void addAccessTokenCookie(HttpHeaders httpHeaders, Token token) {
        httpHeaders.add(HttpHeaders.SET_COOKIE, cookieUtil.createAccessTokenCookie(token.getTokenValue(), token.getDuration()).toString());
    }

    private void addRefreshTokenCookie(HttpHeaders httpHeaders, Token token) {
        httpHeaders.add(HttpHeaders.SET_COOKIE, cookieUtil.createRefreshTokenCookie(token.getTokenValue(), token.getDuration()).toString());
    }
}
