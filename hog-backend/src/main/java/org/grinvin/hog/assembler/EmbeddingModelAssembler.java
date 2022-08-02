package org.grinvin.hog.assembler;

import org.grinvin.hog.controller.*;
import org.grinvin.hog.database.entity.Embedding;
import org.grinvin.hog.database.entity.Graph;
import org.grinvin.hog.model.EmbeddingModel;
import org.grinvin.hog.model.GraphModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class EmbeddingModelAssembler extends RepresentationModelAssemblerSupport<Embedding, EmbeddingModel> {

    public EmbeddingModelAssembler() {
        super(EmbeddingController.class, EmbeddingModel.class);
    }

    @Override
    public EmbeddingModel toModel(Embedding entity){
        EmbeddingModel embeddingModel = instantiateModel(entity);
        embeddingModel.setEntity(entity);

        embeddingModel.add(linkTo(methodOn(EmbeddingController.class).getEmbeddingById(entity.embeddingId())).withSelfRel());
        embeddingModel.add(linkTo(methodOn(GraphController.class).getGraphById(entity.graphId())).withRel("associatedGraph"));
        return embeddingModel;
    }

    @Override
    public CollectionModel<EmbeddingModel> toCollectionModel(Iterable<? extends Embedding> entities){
        CollectionModel<EmbeddingModel> embeddingModels = super.toCollectionModel(entities);
        return embeddingModels;
    }
}
