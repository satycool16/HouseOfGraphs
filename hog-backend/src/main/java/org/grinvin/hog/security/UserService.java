package org.grinvin.hog.security;

import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.response_request_entities.LoginRequest;
import org.grinvin.hog.response_request_entities.MessageResponse;
import org.grinvin.hog.response_request_entities.PasswordResetRequest;
import org.grinvin.hog.response_request_entities.SignupRequest;
import org.springframework.http.ResponseEntity;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;

public interface UserService {
    ResponseEntity<MessageResponse> login(LoginRequest loginRequest, String accessToken, String refreshToken);
    ResponseEntity<MessageResponse> refresh(String accessToken, String refreshToken);
    User getUserProfile();
    ResponseEntity<MessageResponse> logout();
    ResponseEntity<MessageResponse> register(SignupRequest signupRequest) throws UnsupportedEncodingException, MessagingException;
    ResponseEntity<MessageResponse> sendVerificationEmail(SignupRequest signupRequest, String token) throws UnsupportedEncodingException, MessagingException;
    boolean verify(String verificationCode);
    ResponseEntity<MessageResponse> sendPasswordResetEmail(User user) throws UnsupportedEncodingException, MessagingException;
    boolean sendAccountDeletionEmail(User user, boolean adminDeleted) throws UnsupportedEncodingException, MessagingException;
    boolean resetPassword(PasswordResetRequest passwordResetRequest);
}
