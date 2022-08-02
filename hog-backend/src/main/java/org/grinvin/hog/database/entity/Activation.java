package org.grinvin.hog.database.entity;
import java.time.LocalDateTime;

public record Activation(int activationId, int userId, LocalDateTime expirationTime, String token, boolean pwReset) {
}
