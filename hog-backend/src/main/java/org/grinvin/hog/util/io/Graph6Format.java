/* Graph6Format.java
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

import static org.grinvin.hog.util.graph.AdjacencyMatrix.decode;

/**
 * Supports Graph6 format.
 */
public class Graph6Format implements Format{

    @Override
    public boolean supportsInput() {
        return true;
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
        return "Graph6";
    }

    @Override
    public String getFileExtension() {
        return "g6";
    }
    
    class InStream extends GraphInputStream {

        public InStream(InputStream stream) {
            super(stream);
        }

        @Override
        public boolean[][] readGraph() throws IOException {
            byte[] line = readLine();
            if (line != null) {
                return decode(line);
            } else {
                return null;
            }
        }
    }
    
    class OutStream extends GraphOutputStream {

        public OutStream(OutputStream os) {
            super(os);
        }

        @Override
        public void writeGraph(byte[] encoding) throws IOException {
            write (encoding);
            writeLine();
        }
        
    }

    @Override
    public GraphInputStream getInputStream(InputStream in) throws UnsupportedOperationException, IOException {
        return new InStream (in);
    }

    @Override
    public GraphOutputStream getOutputStream(OutputStream out) throws UnsupportedOperationException, IOException {
        return new OutStream (out);
    }
    
}
