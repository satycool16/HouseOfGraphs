package org.grinvin.hog.response_request_entities;

import java.util.List;

public class AddGraphRequest {
    private String graphName;
    private String graphInfo;
    private int userId;
    private double[][] embedding;
    private List<Integer> interestingInvariants;
    private boolean[][] adjacencyMatrix;

    public AddGraphRequest(){}

    public AddGraphRequest(String graphName, String graphInfo, int userId, double[][] embedding, List<Integer> interestingInvariants, boolean[][] adjacencyMatrix) {
        this.graphName = graphName;
        this.graphInfo = graphInfo;
        this.userId = userId;
        this.embedding = embedding;
        this.interestingInvariants = interestingInvariants;
        this.adjacencyMatrix = adjacencyMatrix;
    }

    public String getGraphName() {
        return graphName;
    }

    public void setGraphName(String graphName) {
        this.graphName = graphName;
    }

    public String getGraphInfo() {
        return graphInfo;
    }

    public void setGraphInfo(String graphInfo) {
        this.graphInfo = graphInfo;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public double[][] getEmbedding() {
        return embedding;
    }

    public void setEmbedding(double[][] embedding) {
        this.embedding = embedding;
    }

    public List<Integer> getInterestingInvariants() {
        return interestingInvariants;
    }

    public void setInterestingInvariants(List<Integer> interestingInvariants) {
        this.interestingInvariants = interestingInvariants;
    }

    public boolean[][] getAdjacencyMatrix() {
        return adjacencyMatrix;
    }

    public void setAdjacencyMatrix(boolean[][] adjacencyMatrix) {
        this.adjacencyMatrix = adjacencyMatrix;
    }
}
