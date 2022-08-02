package org.grinvin.hog.response_request_entities;

public class UpdateCommentRequest {
    private int commentId;
    private String newText;

    public UpdateCommentRequest(){}

    public UpdateCommentRequest(int commentId, String newText) {
        this.commentId = commentId;
        this.newText = newText;
    }

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getNewText() {
        return newText;
    }

    public void setNewText(String newText) {
        this.newText = newText;
    }
}
