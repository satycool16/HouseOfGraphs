package org.grinvin.hog.model;

import org.grinvin.hog.database.entity.Invariant;
import org.springframework.hateoas.RepresentationModel;

public class InvariantModel extends RepresentationModel<InvariantModel> {
    private Invariant entity;

    public Invariant getEntity() {
        return entity;
    }

    public void setEntity(Invariant entity) {
        this.entity = entity;
    }
}
