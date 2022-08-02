/* InvariantValueFormat.java
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
import java.util.Map;

/**
 * Supports invariant value format.
 *
 * First the adjacency list of the graph is given (@See AdjacencyListFormat).
 * Followed by a blank line and the invariant values of the graph.
 * The invariant values have the following format: <invariant name>: <invariant value>
 * Each invariant value begins on a new line.
 *
 * Subsequent adjacency lists in the same file are separated by blank lines
 * and/or comments. Any line that start with a semi-colon or a hash-sign (#) is
 * considered a comment.
 */
class InvariantValueFormat implements Format {

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
        return true;
    }

    @Override
    public String getDisplayName() {
        return "Invariant values";
    }

    @Override
    public String getFileExtension() {
        return "txt";
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

        @Override
        public void writeGraphInfo(Map<String, String> graphInvariantValues) throws IOException {
            for(String invariant : graphInvariantValues.keySet()) {
                writeString(invariant);
                writeString(": ");
                writeString(graphInvariantValues.get(invariant));
                writeLine();
            }
            writeLine();
            writeLine();
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
