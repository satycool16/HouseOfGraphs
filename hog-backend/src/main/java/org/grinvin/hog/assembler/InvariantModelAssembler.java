package org.grinvin.hog.assembler;

import org.grinvin.hog.controller.InvariantController;
import org.grinvin.hog.database.entity.Invariant;
import org.grinvin.hog.model.InvariantModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Controller;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@Controller
public class InvariantModelAssembler extends RepresentationModelAssemblerSupport<Invariant, InvariantModel> {

    public InvariantModelAssembler() {
        super(InvariantController.class, InvariantModel.class);
    }

    @Override
    public InvariantModel toModel(Invariant entity){
        InvariantModel invariantModel = instantiateModel(entity);
        invariantModel.setEntity(entity);

        invariantModel.add(linkTo(methodOn(InvariantController.class).getInvariantById(entity.invariantId())).withSelfRel());
        return invariantModel;
    }

    @Override
    public CollectionModel<InvariantModel> toCollectionModel(Iterable<? extends Invariant> entities){
        CollectionModel<InvariantModel> invariantModels = super.toCollectionModel(entities);
        return invariantModels;
    }
}
