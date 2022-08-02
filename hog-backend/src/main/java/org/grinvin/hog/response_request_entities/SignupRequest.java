package org.grinvin.hog.response_request_entities;

public class SignupRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String recaptcha_response;

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRecaptcha_response(){
        return recaptcha_response;
    }

    public void setRecaptcha_response(String recaptcha_response){
        this.recaptcha_response = recaptcha_response;
    }
}
