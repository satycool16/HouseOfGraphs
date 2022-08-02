package org.grinvin.hog.assembler;

import org.grinvin.hog.controller.CommentController;
import org.grinvin.hog.controller.GraphController;
import org.grinvin.hog.controller.GraphInvariantController;
import org.grinvin.hog.controller.UserController;
import org.grinvin.hog.database.entity.Graph;
import org.grinvin.hog.model.DetailedGraphModel;
import org.grinvin.hog.model.GraphModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class GraphModelAssembler extends RepresentationModelAssemblerSupport<Graph, GraphModel> {

    public GraphModelAssembler() {
        super(GraphController.class, GraphModel.class);
    }

    @Override
    public GraphModel toModel(Graph entity){
        GraphModel graphModel = instantiateModel(entity);
        graphModel.setEntity(entity);

        graphModel.add(linkTo(methodOn(GraphController.class).getGraphById(entity.graphId())).withSelfRel());
        graphModel.add(linkTo(methodOn(UserController.class).getUserById(entity.userId())).withRel("graphOwner"));
        graphModel.add(linkTo(methodOn(CommentController.class).getCommentsByGraphId(entity.graphId())).withRel("graphComments"));
        graphModel.add(linkTo(methodOn(GraphInvariantController.class).getGraphInvariantsByGraphId(entity.graphId())).withRel("graphInvariants"));
        return graphModel;
    }

    @Override
    public CollectionModel<GraphModel> toCollectionModel(Iterable<? extends Graph> entities){
        CollectionModel<GraphModel> graphModels = super.toCollectionModel(entities);
        return graphModels;
    }
}
