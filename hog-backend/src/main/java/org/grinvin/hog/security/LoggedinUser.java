package org.grinvin.hog.security;
import org.springframework.security.core.GrantedAuthority;
import java.util.Collection;

public class LoggedinUser {
    private int userId;
    private Collection<? extends GrantedAuthority> authorities;

    public LoggedinUser(int userId, Collection<? extends GrantedAuthority> authorities){
        this.userId = userId;
        this.authorities = authorities;
    }

    public int getUserId() {
        return userId;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
}
