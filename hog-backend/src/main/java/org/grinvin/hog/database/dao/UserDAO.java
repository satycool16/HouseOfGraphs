package org.grinvin.hog.database.dao;

import be.ugent.caagt.dao.Page;
import org.grinvin.hog.database.entity.Activation;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.response_request_entities.TableFilter;
import org.grinvin.hog.response_request_entities.UpdateNameRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDAO {
    int getNumberOfUsers();
    User getUserById(int userId);
    User getUserByEmail(String email);
    int createUser(String email, String password, String firstname, String lastname);
    Page<User> getAllUsers(Pageable pageable, List<TableFilter> filters);
    User getUserByActivationToken(String activationToken);
    boolean userExistsByEmail(String email);
    void activateUser(int userId);
    void updatePassword(int userId, String password);
    void updateName(UpdateNameRequest updateNameRequest);
    void anonymizeAccount(int userId);
    void deleteAccount(int userId);
}
