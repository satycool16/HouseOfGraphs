package org.grinvin.hog.model;

import org.grinvin.hog.database.entity.Graph;
import org.grinvin.hog.util.graph.AdjacencyList;
import org.grinvin.hog.util.graph.AdjacencyMatrix;
import org.springframework.hateoas.RepresentationModel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DetailedGraphModel extends RepresentationModel<DetailedGraphModel> {
    private Graph entity;
    private boolean[][] adjacencyMatrix = new boolean[0][0];
    private List<List<Integer>> adjacencyList = new ArrayList<>();
    private double[][] embedding = new double[0][0];

    public Graph getEntity() {
        return entity;
    }

    public void setEntity(Graph entity) {
        this.entity = entity;
        adjacencyMatrix = AdjacencyMatrix.decode(entity.canonicalForm());
        adjacencyList = AdjacencyList.computeAdjacencyList(adjacencyMatrix);
    }

    public boolean[][] getAdjacencyMatrix() {
        return adjacencyMatrix;
    }

    public void setAdjacencyMatrix(boolean[][] adjacencyMatrix) {
        this.adjacencyMatrix = adjacencyMatrix;
    }

    public List<List<Integer>> getAdjacencyList() {
        return adjacencyList;
    }

    public void setAdjacencyList(List<List<Integer>> adjacencyList) {
        this.adjacencyList = adjacencyList;
    }

    public double[][] getEmbedding() {
        return embedding;
    }

    public void setEmbedding(double[][] embedding) {
        this.embedding = embedding;
    }
}
