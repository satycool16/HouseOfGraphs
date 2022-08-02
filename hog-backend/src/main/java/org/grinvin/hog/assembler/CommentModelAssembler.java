package org.grinvin.hog.assembler;

import org.grinvin.hog.controller.CommentController;
import org.grinvin.hog.controller.GraphController;
import org.grinvin.hog.controller.UserController;
import org.grinvin.hog.database.entity.Comment;
import org.grinvin.hog.model.CommentModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class CommentModelAssembler extends RepresentationModelAssemblerSupport<Comment, CommentModel> {

    public CommentModelAssembler(){
        super(CommentController.class, CommentModel.class);
    }

    @Override
    public CommentModel toModel(Comment entity){
        CommentModel commentModel = instantiateModel(entity);
        commentModel.setEntity(entity);

        commentModel.add(linkTo(methodOn(CommentController.class).getCommentById(entity.commentId())).withSelfRel());
        commentModel.add(linkTo(methodOn(UserController.class).getUserById(entity.userId())).withRel("commentedBy"));
        commentModel.add(linkTo(methodOn(GraphController.class).getGraphById(entity.graphId())).withRel("commentedOn"));
        return commentModel;
    }

    @Override
    public CollectionModel<CommentModel> toCollectionModel(Iterable<? extends Comment> entities){
        CollectionModel<CommentModel> commentModels = super.toCollectionModel(entities);
        return commentModels;
    }
}
