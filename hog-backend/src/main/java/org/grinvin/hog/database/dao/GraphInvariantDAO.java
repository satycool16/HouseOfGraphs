package org.grinvin.hog.database.dao;

import org.grinvin.hog.database.entity.GraphInvariant;

import java.util.List;

public interface GraphInvariantDAO {
    List<GraphInvariant> getGraphInvariantsByGraphId(int graphId);
    GraphInvariant getGraphInvariantByGraphIdInvariantId(int graphId, int invariantId);
    int createGraphInvariant(int graphId, int invariantId, int invariantStatus, Double invariantValue, boolean ofInterest);
    void updateGraphInvariant(int graphId, int invariantId, int invariantStatus, double invariantValue);
    boolean allInvariantsComputed(int graphId);
}
