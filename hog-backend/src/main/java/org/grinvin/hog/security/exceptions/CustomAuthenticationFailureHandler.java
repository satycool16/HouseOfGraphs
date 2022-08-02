package org.grinvin.hog.security.exceptions;

import be.ugent.caagt.dao.DataAccessException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.dao.UserDAO;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.response_request_entities.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    private String getStatus(HttpServletRequest request, AuthenticationException e) throws IOException {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            LoginRequest loginRequest = objectMapper.readValue(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())), LoginRequest.class);
            User user = dac.getUserDAO().getUserByEmail(loginRequest.getEmail());
            if(user != null){
                if(!user.activated()){
                    return "UNACTIVATED";
                } else if(user.usesMd5()) {
                    return "OLD_USER";
                }
            }
            return "CREDENTIALS";
        } catch (Exception ex) {
            throw new DataAccessException(ex);
        }
    }

    @Override
    public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
        HttpStatus httpStatus = HttpStatus.UNAUTHORIZED; // 401
        System.out.println(e.getMessage());
        Map<String, Object> data = new HashMap<>();
        data.put(
                "timestamp",
                new Date()
        );
        data.put(
                "code",
                httpStatus.value()
        );
        data.put(
                "status",
                getStatus(httpServletRequest, e)
        );
        data.put(
                "message",
                e.getMessage()
        );

        // setting the response HTTP status code
        httpServletResponse.setStatus(httpStatus.value());

        // serializing the response body in JSON
        httpServletResponse
                .getOutputStream()
                .println(
                        objectMapper.writeValueAsString(data)
                );
    }
}
