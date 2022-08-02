package org.grinvin.hog.database.dao;

import org.grinvin.hog.database.entity.Graph;

import java.util.List;

public interface GraphDAO {
    Graph getGraphById(int id);
    List<Graph> getGraphByUserId(int id);
    int createGraph(int userId, String name, byte[] canonical);
    Graph getGraphByCanonical(byte[] canonical);
    void deleteGraph(int graphId);
}
