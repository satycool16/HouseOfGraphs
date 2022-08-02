package org.grinvin.hog.assembler;

import org.grinvin.hog.controller.CommentController;
import org.grinvin.hog.controller.EnquiryController;
import org.grinvin.hog.controller.GraphController;
import org.grinvin.hog.controller.UserController;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.model.UserModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class UserModelAssembler extends RepresentationModelAssemblerSupport<User, UserModel> {

    public UserModelAssembler() {
        super(UserController.class, UserModel.class);
    }

    @Override
    public UserModel toModel(User entity) {
        UserModel userModel = instantiateModel(entity);
        userModel.setEntity(entity);

        userModel.add(linkTo(methodOn(UserController.class).getUserById(entity.userId())).withSelfRel());
        userModel.add(linkTo(methodOn(CommentController.class).getCommentsByUserId(entity.userId())).withRel("listComments"));
        userModel.add(linkTo(methodOn(GraphController.class).getGraphsByUserId(entity.userId())).withRel("listGraphs"));
        return userModel;
    }

    @Override
    public CollectionModel<UserModel> toCollectionModel(Iterable<? extends User> entities){
        CollectionModel<UserModel> userModels = super.toCollectionModel(entities);
        //userModels.add(linkTo(methodOn(UserController.class).getAllUsers()).withSelfRel());
        return userModels;
    }
}
