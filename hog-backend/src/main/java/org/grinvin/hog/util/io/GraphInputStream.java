/* GraphInputStream.java
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

import java.io.BufferedInputStream;
import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

/**
 * Input stream with the additional ability to read graphs in some format or
 * other. Different extensions of this abstract class provide different input
 * formats.
 */
public abstract class GraphInputStream extends FilterInputStream {

    /**
     * Reads the next graph from the stream, storing the entries into the given
     * argument. The graph is returned as an adjacency matrix.
     *
     * @return null when end of file was reached.
     *
     * @throws IOException when an input/output error occurs.
     */
    public abstract boolean[][] readGraph() throws IOException;

    /**
     * Create an input stream of this type which augments the given input
     * stream. When the given stream is not yet buffered, it is automatically
     * wrapped in a BufferedInputStream.
     */
    protected GraphInputStream(InputStream stream) {
        super(stream instanceof BufferedInputStream
                ? stream : new BufferedInputStream(stream));
        this.skipLF = false;
        this.buf = new ArrayList<Byte>(256);
    }

    /**
     * Indicates whether the next call to readLine is allowed to skip a single
     * linefeed at the start of the line.
     */
    private boolean skipLF;

    // buffer used by {@link #readLine}.
    private final ArrayList<Byte> buf;

    /**
     * Utility method that returns the next 'line' from the stream or null when
     * the end of the stream is reached.
     */
    protected byte[] readLine() throws IOException {
        buf.clear();
        int ch = read();
        if (skipLF && ch == '\n') {
            ch = read();
        }
        while (ch >= 0 && ch != '\n' && ch != '\r') {
            buf.add((byte) ch);
            ch = read();
        }
        skipLF = (ch == '\r');
        if (ch == -1 && buf.isEmpty()) {
            return null;
        } else {
            byte[] res = new byte[buf.size()];
            for (int i=0; i < buf.size(); i++) {
                res[i] = buf.get(i);
            }
            return res;
        }
    }
}
