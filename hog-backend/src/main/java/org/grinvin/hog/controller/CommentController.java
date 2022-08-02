package org.grinvin.hog.controller;

import be.ugent.caagt.dao.DataAccessException;
import org.grinvin.hog.assembler.CommentModelAssembler;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.dao.CommentDAO;
import org.grinvin.hog.database.entity.Comment;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.enquiry.DrawingEnquiry;
import org.grinvin.hog.model.CommentModel;
import org.grinvin.hog.response_request_entities.AddCommentRequest;
import org.grinvin.hog.response_request_entities.MessageResponse;
import org.grinvin.hog.response_request_entities.UpdateCommentRequest;
import org.grinvin.hog.security.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/api")
public class CommentController {

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    @Autowired
    private CommentModelAssembler commentModelAssembler;

    @Autowired
    private UserService userService;

    @GetMapping(value="/comments/{comment_id}", produces={"application/hal+json"})
    public ResponseEntity<CommentModel> getCommentById(@PathVariable("comment_id") int commentId){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            Optional<Comment> comment = Optional.ofNullable(dac.getCommentDAO().getCommentById(commentId));
            if(comment.isPresent()){
                CommentModel commentModel = commentModelAssembler.toModel(comment.get());
                return new ResponseEntity<>(commentModel, HttpStatus.OK);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @GetMapping(value="/graphs/{graph_id}/comments", produces={"application/hal+json"})
    public ResponseEntity<CollectionModel<CommentModel>> getCommentsByGraphId(@PathVariable("graph_id") int graphId){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            List<Comment> allCommentsByGraph = dac.getCommentDAO().getCommentsByGraphId(graphId);
            CollectionModel<CommentModel> commentModels = commentModelAssembler.toCollectionModel(allCommentsByGraph);
            commentModels.add(linkTo(methodOn(CommentController.class).getCommentsByGraphId(graphId)).withSelfRel());
            return new ResponseEntity<>(commentModels, HttpStatus.OK);
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @GetMapping(value="/users/{user_id}/comments", produces={"application/hal+json"})
    public ResponseEntity<CollectionModel<CommentModel>> getCommentsByUserId(@PathVariable("user_id") int userId){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            List<Comment> allCommentsByUser = dac.getCommentDAO().getCommentsByUserId(userId);
            CollectionModel<CommentModel> commentModels = commentModelAssembler.toCollectionModel(allCommentsByUser);
            commentModels.add(linkTo(methodOn(CommentController.class).getCommentsByUserId(userId)).withSelfRel());
            return new ResponseEntity<>(commentModels, HttpStatus.OK);
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @PostMapping(value= "/comments", consumes={"application/json"}, produces={"application/json"})
    @PreAuthorize("hasAnyRole('REGULAR', 'ADMIN')")
    public ResponseEntity<MessageResponse> addComment(@RequestBody AddCommentRequest addCommentRequest) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            int key = dac.getCommentDAO().createComment(addCommentRequest);
            if(key != -1){
                return ResponseEntity.ok(new MessageResponse(true, "Comment added successfully!"));
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    // TODO - How to know if database operation was successful?
    @PostMapping(value= "/remove_comment", consumes={"application/json"}, produces={"application/json"})
    @PreAuthorize("hasAnyRole('REGULAR', 'ADMIN')")
    public ResponseEntity<MessageResponse> removeComment(@RequestBody int commentId) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            CommentDAO cDAO = dac.getCommentDAO();
            User activeUser = userService.getUserProfile();
            Comment comment = cDAO.getCommentById(commentId);
            if(comment == null){
                return ResponseEntity.notFound().build();
            }
            // Admins can remove all comments, logged in users can delete their own comments
            if(activeUser != null && (activeUser.userId() == comment.userId() || activeUser.userRole() == 2)){
                cDAO.deleteComment(commentId);
                return ResponseEntity.ok(new MessageResponse(true, "Comment removed successfully!"));
            } else {
                return new ResponseEntity<>(new MessageResponse(false, "Unauthorized to remove comment"), HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }

    }

    @PatchMapping(value= "/update_comment", consumes={"application/json"}, produces={"application/json"})
    @PreAuthorize("hasAnyRole('REGULAR', 'ADMIN')")
    public ResponseEntity<MessageResponse> updateComment(@RequestBody UpdateCommentRequest updateCommentRequest) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            CommentDAO cDAO = dac.getCommentDAO();
            User activeUser = userService.getUserProfile();
            Comment comment = cDAO.getCommentById(updateCommentRequest.getCommentId());
            if(comment == null){
                return ResponseEntity.notFound().build();
            }
            // Admins can update all comments, logged in users can update their own comments
            if(activeUser != null && (activeUser.userId() == comment.userId() || activeUser.userRole() == 2)){
                cDAO.updateComment(updateCommentRequest);
                return ResponseEntity.ok(new MessageResponse(true, "Comment updated successfully!"));
            } else {
                return new ResponseEntity<>(new MessageResponse(false, "Unauthorized to update comment"), HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }
}
