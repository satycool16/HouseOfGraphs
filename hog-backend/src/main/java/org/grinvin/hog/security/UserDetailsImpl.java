package org.grinvin.hog.security;

import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.database.entity.UserRole;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class UserDetailsImpl implements UserDetails {
    private final User user;

    public UserDetailsImpl(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        UserRole role;
        if(user.userRole() == 0){
            role = UserRole.ROLE_COMPUTER;
        } else if (user.userRole() == 2) {
            role = UserRole.ROLE_ADMIN;
        } else {
            role = UserRole.ROLE_REGULAR;
        }
        return new ArrayList<GrantedAuthority>(List.of(new SimpleGrantedAuthority(role.name())));
    }

    public User getUser() {
        return user;
    }

    @Override
    public String getPassword() {
        return user.password();
    }

    @Override
    public String getUsername() {
        return user.email();
    }

    // TODO - fix these booleans
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return user.activated();
    }
}
