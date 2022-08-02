package org.grinvin.hog.controller;

import be.ugent.caagt.dao.DataAccessException;
import be.ugent.caagt.dao.Page;
import org.grinvin.hog.assembler.UserModelAssembler;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.dao.CommentDAO;
import org.grinvin.hog.database.dao.UserDAO;
import org.grinvin.hog.database.entity.Comment;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.model.UserModel;
import org.grinvin.hog.response_request_entities.*;
import org.grinvin.hog.security.CookieUtil;
import org.grinvin.hog.security.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CookieUtil cookieUtil;
    @Autowired
    private UserModelAssembler userModelAssembler;
    @Autowired
    private PagedResourcesAssembler<User> pagedResourcesAssembler;

    @PostMapping(value="", produces={"application/hal+json"})
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CollectionModel<UserModel>> getAllUsers(@RequestBody UserTableRequest userTableRequest){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            Sort.Direction dir = userTableRequest.getSortDir().equals("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
            Pageable paging = PageRequest.of(userTableRequest.getPage(), userTableRequest.getSize(), Sort.by(dir, userTableRequest.getSort()));
            Page<User> pageUsers = dac.getUserDAO().getAllUsers(paging, userTableRequest.getFilters());
            System.out.println(pageUsers.getFullSize());
            org.springframework.data.domain.Page<User> res = new PageImpl<>(pageUsers.getList(), paging, pageUsers.getFullSize());
            return new ResponseEntity<>(pagedResourcesAssembler.toModel(res, userModelAssembler),
                    HttpStatus.OK
            );
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @GetMapping(value="/{user_id}", produces={"application/hal+json"})
    public ResponseEntity<UserModel> getUserById(@PathVariable("user_id") int userId){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            Optional<User> user = Optional.ofNullable(dac.getUserDAO().getUserById(userId));
            if(user.isPresent()){
                return new ResponseEntity<>(
                        userModelAssembler.toModel(user.get()),
                        HttpStatus.OK
                );
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @PatchMapping(value= "/update_name", consumes={"application/json"}, produces={"application/json"})
    @PreAuthorize("hasAnyRole('REGULAR', 'ADMIN')")
    public ResponseEntity<MessageResponse> updateName(@RequestBody UpdateNameRequest updateNameRequest) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            UserDAO uDao = dac.getUserDAO();
            User activeUser = userService.getUserProfile();
            User user = uDao.getUserById(updateNameRequest.getUserId());
            if(user == null){
                return ResponseEntity.notFound().build();
            }
            // Logged in users can update their own name
            if(activeUser != null && activeUser.userId() == updateNameRequest.getUserId()){
                uDao.updateName(updateNameRequest);
                return ResponseEntity.ok(new MessageResponse(true, "Name updated successfully!"));
            } else {
                return new ResponseEntity<>(new MessageResponse(false, "Unauthorized to update name"), HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @PatchMapping(value= "/update_password", consumes={"application/json"}, produces={"application/json"})
    @PreAuthorize("hasAnyRole('REGULAR', 'ADMIN')")
    public ResponseEntity<MessageResponse> updatePassword(@RequestBody UpdatePasswordRequest updatePasswordRequest) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            UserDAO uDao = dac.getUserDAO();
            User activeUser = userService.getUserProfile();
            User user = uDao.getUserById(updatePasswordRequest.getUserId());
            if(user == null){
                return ResponseEntity.notFound().build();
            }
            // Logged in users can update their own password
            if(activeUser != null && activeUser.userId() == updatePasswordRequest.getUserId()){
                try {
                    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.email(), updatePasswordRequest.getOldPassword()));
                } catch (Exception e) {
                    return new ResponseEntity<>(new MessageResponse(false, "Provided password doesn't match current password"), HttpStatus.OK);
                }
                uDao.updatePassword(updatePasswordRequest.getUserId(), passwordEncoder.encode(updatePasswordRequest.getNewPassword()));
                return ResponseEntity.ok(new MessageResponse(true, "Name updated successfully!"));
            } else {
                return new ResponseEntity<>(new MessageResponse(false, "Unauthorized to update name"), HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    private void deleteOrAnonymize(int userId) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            UserDAO uDao = dac.getUserDAO();
            int nrOfComments = dac.getCommentDAO().getCommentsByUserId(userId).size();
            int nrOfGraphs = dac.getGraphDAO().getGraphByUserId(userId).size();
            // TODO - add userId to embedding
            //int nrOfEmbeddings = dac.getEmbeddingDAO().get
            if(nrOfComments == 0 && nrOfGraphs == 0){
                uDao.deleteAccount(userId);
            } else {
                uDao.anonymizeAccount(userId);
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @PostMapping(value= "/remove_account", consumes={"application/json"}, produces={"application/json"})
    @PreAuthorize("hasAnyRole('REGULAR', 'ADMIN')")
    public ResponseEntity<MessageResponse> removeAccount(@RequestBody DeleteAccountRequest deleteAccountRequest) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            UserDAO uDoa = dac.getUserDAO();
            int userId = deleteAccountRequest.getUserId();
            User activeUser = userService.getUserProfile();
            User user = uDoa.getUserById(userId);
            // Check if user exists and hasn't been removed yet
            if(user == null || (user.email() == null && user.password() == null)){
                return ResponseEntity.notFound().build();
            }
            // Logged in users can remove their own account, admins can remove all accounts
            if(activeUser != null){
                try {
                    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(activeUser.email(), deleteAccountRequest.getPassword()));
                } catch (Exception e) {
                    return new ResponseEntity<>(new MessageResponse(false, "Provided password doesn't match current password"), HttpStatus.OK);
                }
                if(activeUser.userId() == userId) {
                    // User deletes own account + log out
                    deleteOrAnonymize(userId);
                    userService.sendAccountDeletionEmail(user, false);
                    HttpHeaders responseHeaders = new HttpHeaders();
                    responseHeaders.add(HttpHeaders.SET_COOKIE, cookieUtil.createAccessTokenCookie(null, 0L).toString());
                    responseHeaders.add(HttpHeaders.SET_COOKIE, cookieUtil.createRefreshTokenCookie(null, 0L).toString());
                    return ResponseEntity.ok().headers(responseHeaders).body(new MessageResponse(true, "Account removed successfully!"));
                } else if(activeUser.userRole() == 2){
                    // Admin deletes user account
                    deleteOrAnonymize(userId);
                    userService.sendAccountDeletionEmail(user, true);
                    return ResponseEntity.ok(new MessageResponse(true, "User account removed successfully!"));
                }
                return new ResponseEntity<>(new MessageResponse(false, "Unauthorized to remove account"), HttpStatus.UNAUTHORIZED);
            } else {
                return new ResponseEntity<>(new MessageResponse(false, "Unauthorized to remove account"), HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }


    // TODO - this is a temporary solution to the failure of AuthenticationFailureHandler
    @GetMapping("/old_user")
    public ResponseEntity<MessageResponse> checkOldUser(@RequestParam String email) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            User user = dac.getUserDAO().getUserByEmail(email);
            if (user == null) {
                System.out.println("User doesnt exist");
                return ResponseEntity.badRequest().body(new MessageResponse(false, "This email is not linked to an account!"));
            }
            if(!user.usesMd5()){
                return ResponseEntity.badRequest().body(new MessageResponse(false, "This email linked to an new account."));
            }
            return ResponseEntity.ok().body(new MessageResponse(true, "This email belongs to an old account"));
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

}
