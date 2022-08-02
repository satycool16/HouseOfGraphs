package org.grinvin.hog.security;

import be.ugent.caagt.dao.DataAccessException;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.dao.UserDAO;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            User user = dac.getUserDAO().getUserByEmail(email);
            if(user == null){
                throw new UsernameNotFoundException("User Not Found with email: " + email);
            }
            return new UserDetailsImpl(user);
        } catch (Exception e) {
            throw new DataAccessException(e);
        }

    }
}
