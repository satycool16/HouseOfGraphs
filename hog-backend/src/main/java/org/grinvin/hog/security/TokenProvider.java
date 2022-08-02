package org.grinvin.hog.security;

import java.time.LocalDateTime;

public interface TokenProvider {
    Token generateAccessToken(String subject);
    Token generateRefreshToken(String subject);
    String getEmailFromToken(String token);
    LocalDateTime getExpiryDateFromToken(String token);
    boolean validateToken(String token);
}
