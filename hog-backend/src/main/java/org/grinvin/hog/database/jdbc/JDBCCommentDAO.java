package org.grinvin.hog.database.jdbc;

import be.ugent.caagt.dao.helper.BaseDAC;
import be.ugent.caagt.dao.helper.BaseDAO;
import org.grinvin.hog.database.dao.CommentDAO;
import org.grinvin.hog.database.entity.Comment;
import org.grinvin.hog.response_request_entities.AddCommentRequest;
import org.grinvin.hog.response_request_entities.UpdateCommentRequest;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;

public class JDBCCommentDAO extends BaseDAO implements CommentDAO {

    public JDBCCommentDAO(BaseDAC baseDAC) {
        super(baseDAC);
    }

    private static Comment createComment(ResultSet rs) throws SQLException {
        return new Comment(
          rs.getInt("comment_id"),
          rs.getInt("graph_id"),
          rs.getInt("user_id"),
          rs.getTimestamp("commenttime").toLocalDateTime(),
          rs.getString("text")
        );
    }

    @Override
    public List<Comment> getCommentsByGraphId(int graphId) {
        return select("comment_id, graph_id, user_id, commenttime, text").from("comment")
                .where("graph_id", graphId)
                .getList(JDBCCommentDAO::createComment);
    }

    @Override
    public List<Comment> getCommentsByUserId(int userId) {
        return select("comment_id, graph_id, user_id, commenttime, text").from("comment")
                .where("user_id", userId)
                .getList(JDBCCommentDAO::createComment);
    }

    @Override
    public Comment getCommentById(int commentId) {
        return select("comment_id, graph_id, user_id, commenttime, text").from("comment")
                .where("comment_id", commentId)
                .getObject(JDBCCommentDAO::createComment);
    }

    @Override
    public int createComment(AddCommentRequest addCommentRequest) {
        LocalDateTime commenttime = LocalDateTime.now();
        return insertInto("comment")
                .value("graph_id", addCommentRequest.getGraphId())
                .value("user_id", addCommentRequest.getUserId())
                .value("commenttime", commenttime)
                .value("text", addCommentRequest.getText())
                .create();
    }

    @Override
    public void updateComment(UpdateCommentRequest updateCommentRequest) {
        LocalDateTime commenttime = LocalDateTime.now();
        update("comment")
                .set("commenttime", commenttime)
                .set("text", updateCommentRequest.getNewText())
                .where("comment_id", updateCommentRequest.getCommentId())
                .execute();
    }

    @Override
    public void deleteComment(int commentId) {
        deleteFrom("comment")
                .where("comment_id", commentId)
                .execute();
    }
}
