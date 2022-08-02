package org.grinvin.hog.response_request_entities;

public class DeleteAccountRequest {
    private int userId;
    private String password;

    public DeleteAccountRequest(){}

    public DeleteAccountRequest(int userId, String password) {
        this.userId = userId;
        this.password = password;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
