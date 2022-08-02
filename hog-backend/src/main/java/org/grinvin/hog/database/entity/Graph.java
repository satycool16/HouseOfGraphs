package org.grinvin.hog.database.entity;

import java.util.Arrays;
import java.util.Objects;

public record Graph (int graphId, byte[] canonicalForm, String graphName, int userId, long uploadId){
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Graph graph = (Graph) o;
        return graphId == graph.graphId;
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(graphId, graphName, userId, uploadId);
        result = 31 * result + Arrays.hashCode(canonicalForm);
        return result;
    }
}
