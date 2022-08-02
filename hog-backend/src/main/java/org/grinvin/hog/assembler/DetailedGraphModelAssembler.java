package org.grinvin.hog.assembler;

import org.grinvin.hog.controller.*;
import org.grinvin.hog.database.entity.Graph;
import org.grinvin.hog.model.DetailedGraphModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class DetailedGraphModelAssembler extends RepresentationModelAssemblerSupport<Graph, DetailedGraphModel> {

    public DetailedGraphModelAssembler() {
        super(GraphController.class, DetailedGraphModel.class);
    }

    @Override
    public DetailedGraphModel toModel(Graph entity){
        DetailedGraphModel detailedGraphModel = instantiateModel(entity);
        detailedGraphModel.setEntity(entity);

        detailedGraphModel.add(linkTo(methodOn(GraphController.class).getGraphById(entity.graphId())).withSelfRel());
        detailedGraphModel.add(linkTo(methodOn(UserController.class).getUserById(entity.userId())).withRel("graphOwner"));
        detailedGraphModel.add(linkTo(methodOn(CommentController.class).getCommentsByGraphId(entity.graphId())).withRel("graphComments"));
        detailedGraphModel.add(linkTo(methodOn(GraphInvariantController.class).getGraphInvariantsByGraphId(entity.graphId())).withRel("graphInvariants"));
        detailedGraphModel.add(linkTo(methodOn(EmbeddingController.class).getEmbeddingsByGraphId(entity.graphId())).withRel("embeddings"));
        return detailedGraphModel;
    }

    @Override
    public CollectionModel<DetailedGraphModel> toCollectionModel(Iterable<? extends Graph> entities){
        CollectionModel<DetailedGraphModel> graphModels = super.toCollectionModel(entities);
        return graphModels;
    }
}
