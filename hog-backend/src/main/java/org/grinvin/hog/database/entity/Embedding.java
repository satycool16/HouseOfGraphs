package org.grinvin.hog.database.entity;

public record Embedding(int embeddingId, int graphId, double[][] embedding, int dimension) {
}
