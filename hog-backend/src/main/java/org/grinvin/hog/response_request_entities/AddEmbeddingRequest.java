package org.grinvin.hog.response_request_entities;

public class AddEmbeddingRequest {
    private int graphId;
    private double[][] embedding;

    public AddEmbeddingRequest(){}

    public AddEmbeddingRequest(int graphId, double[][] embedding) {
        this.graphId = graphId;
        this.embedding = embedding;
    }

    public int getGraphId() {
        return graphId;
    }

    public void setGraphId(int graphId) {
        this.graphId = graphId;
    }

    public double[][] getEmbedding() {
        return embedding;
    }

    public void setEmbedding(double[][] embedding) {
        this.embedding = embedding;
    }
}
