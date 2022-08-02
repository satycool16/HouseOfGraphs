package org.grinvin.hog.model;

import org.grinvin.hog.database.entity.GraphInvariant;
import org.springframework.hateoas.RepresentationModel;

public class GraphInvariantModel extends RepresentationModel<GraphInvariantModel> {
    private GraphInvariant entity;

    public GraphInvariant getEntity() {
        return entity;
    }

    public void setEntity(GraphInvariant entity) {
        this.entity = entity;
    }
}
