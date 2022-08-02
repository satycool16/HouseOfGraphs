/* AdjacencyListFormat.java
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
package org.grinvin.hog.util.io;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * Supports adjacency list format.
 *
 * A graph is represented by giving the list of neighbours for every vertex.
 * Vertices are numbered starting at 1. For each vertex the corresponding line
 * starts with the vertex number, a colon, and then the list of all its
 * neighbours, separated by white space.
 *
 * Subsequent adjacency matrices in the same file are separated by blank lines
 * and/or comments. Any line that start with a semi-colon or a hash-sign (#) is
 * considered a comment.
 */
public class AdjacencyListFormat implements Format {
    
    @Override
    public boolean supportsInput() {
        return false; // TODO
    }
    
    @Override
    public boolean supportsOutput() {
        return true;
    }

    @Override
    public boolean supportsExtensiveOutput() {
        return false;
    }
    
    @Override
    public String getDisplayName() {
        return "Adjacency list";
    }
    
    @Override
    public String getFileExtension() {
        return "lst";
    }
    
    class OutStream extends GraphOutputStream {
        
        public OutStream(OutputStream os) {
            super(os);
        }
        
        @Override
        public void writeGraph(boolean[][] adjacencyMatrix) throws IOException {
            int n = adjacencyMatrix.length;
            for (int i = 0; i < n; i++) {
                writeString(Integer.toString(i + 1));
                write(':');
                for (int j = 0; j < n; j++) {
                    if (adjacencyMatrix[i][j]) {
                        write(' ');
                        writeString(Integer.toString(j + 1));
                    }
                }
                writeLine();
            }
            writeLine();
        }
    }
    
    @Override
    public GraphInputStream getInputStream(InputStream in) throws UnsupportedOperationException, IOException {
        throw new UnsupportedOperationException("Not supported yet.");
    }
    
    @Override
    public GraphOutputStream getOutputStream(OutputStream out) throws UnsupportedOperationException, IOException {
        return new OutStream(out);
    }
}
