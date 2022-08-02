/* MulticodeFormat.java
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

import org.grinvin.hog.util.graph.MulticodeUtils;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * Supports Multicode format.
 */
class MulticodeFormat implements Format {

    @Override
    public GraphInputStream getInputStream(InputStream in) throws UnsupportedOperationException, IOException {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public GraphOutputStream getOutputStream(OutputStream out) throws UnsupportedOperationException, IOException {
        return new OutStream(out);
    }

    @Override
    public boolean supportsInput() {
        return false; // TODO: support this
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
        return "Multicode";
    }

    @Override
    public String getFileExtension() {
        return "mc";
    }
    
    class OutStream extends GraphOutputStream {
 
        public OutStream(OutputStream os) {
            super(os);
        }

        @Override
        public void writeGraph(boolean[][] adjacencyMatrix) throws IOException {
            write (MulticodeUtils.encode(adjacencyMatrix)) ;
        }
   
    }
    
}
