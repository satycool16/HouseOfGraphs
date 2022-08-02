/* GraphUtils.java
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Copyright (C) 2010 Universiteit Gent
 * 
 * House of Graphs: an online database of 'interesting' graphs
 * 
 * Authors:
 *    Kris.Coolsaet@UGent.be
 *    Jan.Goedgebeur@UGent.be
 * In collaboration with:
 *    Hadrien.Melot@UMons.ac.be
 *    Gunnar.Brinkmann@UGent.be
 */

package org.grinvin.hog.util.graph;

import java.util.ArrayList;
import java.util.Collection;

/**
 * General utilities for working with edge lists and adjacency matrices of graphs
 */
public class GraphUtils {


    // TODO: this is just a guess
    // TODO: do not use a hard coded value
    //The max nv should depend on the max length in the database of Graph.canonicalForm
    public static final int MAX_NUMBER_OF_VERTICES = 250;    

    /**
     * Converts an edge list of a graph into an adjacency matrix.
     *
     * Remark: it is assumed that the vertices are labelled starting from 0.
     */
    public static boolean[][] computeAdjacencyMatrix(int numberOfVertices, Collection<int[]> edgeList) {
        //All values are initialized to false by default
        boolean[][] adj = new boolean[numberOfVertices][numberOfVertices];

        for(int[] edge : edgeList) {
            adj[edge[0]][edge[1]] = true;
            adj[edge[1]][edge[0]] = true;
        }

        return adj;
    }

    /**
     * Converts an adjacency matrix of a graph into an edge list.
     *
     * Important: only returns the edges (v1, v2) for which v1 < v2.
     */
    public static Collection<int[]> computeEdgeList(boolean[][] adjacencyMatrix) {
        Collection<int[]> edgeList = new ArrayList<int[]>();
        for(int i = 0; i < adjacencyMatrix.length; i++)
            for(int j = i + 1; j < adjacencyMatrix.length; j++)
                if(adjacencyMatrix[i][j])
                    edgeList.add(new int[]{i, j});

        return edgeList;
    }
    
    /**
     * Count number of edges in the graph which corresponds to this adjacency matrix
     */
    public static int countEdges (boolean[][] adjacencyMatrix) {
        int count = 0;
        for (int i = 0; i < adjacencyMatrix.length; i++) {
            for (int j = i+1; j < adjacencyMatrix.length; j++) {
                if (adjacencyMatrix[i][j]) {
                    count ++;
                }
            }
        }
        return count;
    }
}
