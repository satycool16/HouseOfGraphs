package org.grinvin.hog.database.entity;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public record User(int userId, boolean activated, String email, String password, String firstname, String lastname,
                   int userRole, boolean usesMd5) {
}
