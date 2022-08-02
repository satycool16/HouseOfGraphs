package org.grinvin.hog.model;

import org.grinvin.hog.database.entity.Graph;
import org.grinvin.hog.database.entity.GraphInvariant;
import org.grinvin.hog.util.graph.AdjacencyList;
import org.grinvin.hog.util.graph.AdjacencyMatrix;
import org.springframework.hateoas.RepresentationModel;

import java.util.ArrayList;
import java.util.List;

public class GraphSearchModel extends RepresentationModel<GraphSearchModel> {
    private int graphId;
    private String graphName;
    private List<GraphInvariant> invariantValues;
    private List<List<Integer>> adjacencyList = new ArrayList<>();
    private double[][] embedding = new double[0][0];

    public int getGraphId() {
        return graphId;
    }

    public void setGraphId(int graphId) {
        this.graphId = graphId;
    }

    public String getGraphName() {
        return graphName;
    }

    public void setGraphName(String graphName) {
        this.graphName = graphName;
    }

    public List<GraphInvariant> getInvariantValues() {
        return invariantValues;
    }

    public void setInvariantValues(List<GraphInvariant> invariantValues) {
        this.invariantValues = invariantValues;
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

    public void calculateAdjacency(byte[] canonicalForm){
        setAdjacencyList(AdjacencyList.computeAdjacencyList(AdjacencyMatrix.decode(canonicalForm)));
    }
}
