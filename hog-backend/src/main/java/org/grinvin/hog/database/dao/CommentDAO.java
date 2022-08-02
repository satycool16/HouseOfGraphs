package org.grinvin.hog.database.dao;

import org.grinvin.hog.database.entity.Comment;
import org.grinvin.hog.response_request_entities.AddCommentRequest;
import org.grinvin.hog.response_request_entities.UpdateCommentRequest;

import java.util.List;

public interface CommentDAO {
    List<Comment> getCommentsByGraphId(int graphId);
    List<Comment> getCommentsByUserId(int userId);
    Comment getCommentById(int commentId);
    int createComment(AddCommentRequest addCommentRequest);
    void updateComment(UpdateCommentRequest updateCommentRequest);
    void deleteComment(int commentId);
}
