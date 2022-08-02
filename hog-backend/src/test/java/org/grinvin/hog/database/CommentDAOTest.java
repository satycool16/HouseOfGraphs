package org.grinvin.hog.database;

import org.grinvin.hog.database.dao.CommentDAO;
import org.grinvin.hog.database.entity.Comment;
import org.grinvin.hog.response_request_entities.AddCommentRequest;
import org.grinvin.hog.response_request_entities.UpdateCommentRequest;
import org.junit.Before;
import org.junit.Test;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.junit.Assert.*;

public class CommentDAOTest extends DAOTest {

    private CommentDAO dao;

    @Before
    public void getDAO() {
        dao = context.getCommentDAO();
    }

    @Test
    public void getCommentsByGraphId() {
        List<Comment> comments = dao.getCommentsByGraphId(26);
        assertEquals(3, comments.size());
        List<Integer> commentIds = comments.stream().map(Comment::commentId).sorted().toList();
        assertEquals(27, (int)commentIds.get(0));
        assertEquals(30382, (int)commentIds.get(1));
        assertEquals(45647, (int)commentIds.get(2));
    }

    @Test
    public void getCommentsByUserId() {
        List<Comment> comments = dao.getCommentsByUserId(25);
        assertEquals(458, comments.size());
    }

    @Test
    public void getCommentById() {
        Comment comment = dao.getCommentById(30382);
        assertEquals(30382, comment.commentId());
        assertEquals(26, comment.graphId());
        assertEquals(30374, comment.userId());
        assertEquals("Graph with the fewest vertices that has chromatic number 5 but clique number less than 5.", comment.text());
    }

    @Test
    public void createComment() {
        List<Comment> comments = dao.getCommentsByGraphId(26);
        assertEquals(3, comments.size());
        int id = dao.createComment(new AddCommentRequest(26, 25, "test comment"));
        List<Comment> newComments = dao.getCommentsByGraphId(26);
        assertEquals(4, newComments.size());
        Comment newestComment = newComments.stream().filter(c -> c.commentId() == id).findFirst().orElseThrow();
        assertEquals(id, newestComment.commentId());
        assertEquals(26, newestComment.graphId());
        assertEquals(25, newestComment.userId());
        assertEquals("test comment", newestComment.text());
    }

    @Test
    public void updateComment() {
        Comment comment = dao.getCommentById(30382);
        assertEquals("Graph with the fewest vertices that has chromatic number 5 but clique number less than 5.", comment.text());
        dao.updateComment(new UpdateCommentRequest(30382, "updated comment"));
        Comment newComment = dao.getCommentById(30382);
        assertEquals("updated comment", newComment.text());
    }

    @Test
    public void deleteComment() {
        assertNotNull(dao.getCommentById(30382));
        dao.deleteComment(30382);
        assertNull(dao.getCommentById(30382));
    }

}
