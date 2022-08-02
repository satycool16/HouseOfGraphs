package org.grinvin.hog.model;

import org.grinvin.hog.database.entity.Graph;
import org.springframework.hateoas.RepresentationModel;

public class GraphModel extends RepresentationModel<GraphModel> {
    private Graph entity;

    public Graph getEntity() {
        return entity;
    }

    public void setEntity(Graph entity) {
        this.entity = entity;
    }
}
