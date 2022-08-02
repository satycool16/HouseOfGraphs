package org.grinvin.hog.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

@Component
public class JwtUtils {
    @Value("${accessTokenCookieName}")
    private String accessTokenCookieName;

    public String getJwtFromCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if(cookies != null) {
            for (Cookie cookie : cookies) {
                if (accessTokenCookieName.equals(cookie.getName())) {
                    String accessToken = cookie.getValue();
                    if (accessToken == null) return null;

                    return SecurityCipher.decrypt(accessToken);
                }
            }
        }
        return null;
    }

    public String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            String accessToken = bearerToken.substring(7);
            if (accessToken == null) return null;

            return SecurityCipher.decrypt(accessToken);
        }
        return null;
    }
}
