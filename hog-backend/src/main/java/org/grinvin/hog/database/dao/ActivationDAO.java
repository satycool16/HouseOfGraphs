package org.grinvin.hog.database.dao;

import org.grinvin.hog.database.entity.Activation;

import java.time.LocalDateTime;

public interface ActivationDAO {
    Activation getActivationById(int activationId);
    Activation getActivationByToken(String token);
    int createActivation(int userId, LocalDateTime expirationTime, String token , boolean pwReset);
    void deleteActivationByToken(String token);
    void deleteActivationByUserId(int userId);
}
