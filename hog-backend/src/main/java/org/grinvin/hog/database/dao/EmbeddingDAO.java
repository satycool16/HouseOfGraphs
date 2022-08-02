package org.grinvin.hog.database.dao;

import org.grinvin.hog.database.entity.Embedding;
import org.grinvin.hog.response_request_entities.AddEmbeddingRequest;

import java.util.List;

public interface EmbeddingDAO {
    Embedding getEmbeddingById(int embeddingId);
    List<Embedding> getEmbeddingsByGraphId(int graphId);
    int createEmbedding(AddEmbeddingRequest addEmbeddingRequest);
    void deleteEmbedding(int embeddingId);
}
