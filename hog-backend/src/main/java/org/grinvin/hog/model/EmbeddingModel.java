package org.grinvin.hog.model;

import org.grinvin.hog.database.entity.Embedding;
import org.springframework.hateoas.RepresentationModel;

public class EmbeddingModel extends RepresentationModel<EmbeddingModel> {
    private Embedding entity;

    public Embedding getEntity() {
        return entity;
    }

    public void setEntity(Embedding entity) {
        this.entity = entity;
    }
}
