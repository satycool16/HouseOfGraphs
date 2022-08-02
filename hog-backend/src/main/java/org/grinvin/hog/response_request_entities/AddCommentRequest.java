package org.grinvin.hog.response_request_entities;

public class AddCommentRequest {
    private int graphId;
    private int userId;
    private String text;

    public AddCommentRequest(){}

    public AddCommentRequest(int graphId, int userId, String text) {
        this.graphId = graphId;
        this.userId = userId;
        this.text = text;
    }

    public int getGraphId() {
        return graphId;
    }

    public void setGraphId(int graphId) {
        this.graphId = graphId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
