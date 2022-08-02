package org.grinvin.hog.assembler;

import org.grinvin.hog.controller.GraphController;
import org.grinvin.hog.controller.GraphInvariantController;
import org.grinvin.hog.controller.InvariantController;
import org.grinvin.hog.database.entity.GraphInvariant;
import org.grinvin.hog.model.GraphInvariantModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Controller;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@Controller
public class GraphInvariantModelAssembler extends RepresentationModelAssemblerSupport<GraphInvariant, GraphInvariantModel> {

    public GraphInvariantModelAssembler() {
        super(GraphInvariantController.class, GraphInvariantModel.class);
    }

    @Override
    public GraphInvariantModel toModel(GraphInvariant entity){
        GraphInvariantModel graphInvariantModel = instantiateModel(entity);
        graphInvariantModel.setEntity(entity);

        graphInvariantModel.add(linkTo(methodOn(GraphInvariantController.class).getGraphInvariantByGraphIdInvariantId(entity.graphId(), entity.invariantId())).withSelfRel());
        graphInvariantModel.add(linkTo(methodOn(GraphController.class).getGraphById(entity.graphId())).withRel("associatedGraph"));
        graphInvariantModel.add(linkTo(methodOn(InvariantController.class).getInvariantById(entity.invariantId())).withRel("associatedInvariant"));
        return graphInvariantModel;
    }

    @Override
    public CollectionModel<GraphInvariantModel> toCollectionModel(Iterable<? extends GraphInvariant> entities){
        CollectionModel<GraphInvariantModel> graphInvariantModels = super.toCollectionModel(entities);
        return graphInvariantModels;
    }
}
