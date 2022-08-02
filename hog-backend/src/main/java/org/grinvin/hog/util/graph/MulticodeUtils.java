/* MulticodeUtils.java
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

/**
 * Utility functions for handling multicode.
 */
public class MulticodeUtils {
    

    public static byte[] encode (boolean[][] adj) {
       // count number of vertices and number of edges
        int numberOfVertices = adj.length;
        int numberOfEdges = GraphUtils.countEdges(adj);

        //length of a multicode is number of vertices + number of edges
        byte[] byteArray = new byte[numberOfVertices + numberOfEdges];
        int currentByteArrayIndex = 0;
        byteArray[currentByteArrayIndex++] = (byte) numberOfVertices;
        for (int i = 0; i < numberOfVertices - 1; i++) {
            for (int j = i + 1; j < numberOfVertices; j++) {
                if (adj[i][j]) {
                    byteArray[currentByteArrayIndex++] = (byte) (j + 1);
                }
            }
            byteArray[currentByteArrayIndex++] = 0;
        }

        assert currentByteArrayIndex == byteArray.length: 
            "Invalid multicode length: " + currentByteArrayIndex + " vs " + byteArray.length;

        return byteArray;
    }
}
