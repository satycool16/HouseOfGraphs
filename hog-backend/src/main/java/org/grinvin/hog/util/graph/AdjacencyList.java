package org.grinvin.hog.util.graph;
import java.util.ArrayList;
import java.util.List;

public class AdjacencyList {

    /**
     * Calculate the adjacency list from the adjacency matrix
     * @param adjacencyMatrix of the graph
     * @return Adjacency list with vertices starting from 1
     */
    public static List<List<Integer>> computeAdjacencyList(boolean[][] adjacencyMatrix) {
        List<List<Integer>> adjacencyList = new ArrayList<>();
        for (boolean[] row : adjacencyMatrix) {
            List<Integer> neighbours = new ArrayList<>();
            for (int j = 0; j < adjacencyMatrix.length; j++) {
                if (row[j]) {
                    neighbours.add(j);
                }
            }
            adjacencyList.add(neighbours);
        }
        return adjacencyList;
    }

}
