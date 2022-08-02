/* GraphOutputStream.java
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

import java.io.BufferedOutputStream;
import java.io.FilterOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Map;

import static org.grinvin.hog.util.graph.AdjacencyMatrix.decode;
import static org.grinvin.hog.util.graph.AdjacencyMatrix.encode;

/**
 * Output stream with the additional ability to write graphs in some format or
 * other. Different extensions of this abstract class provide different output
 * formats.
 *
 * Clients should implement at least one of the <tt>writeGraph</tt> methods.
 */
public abstract class GraphOutputStream extends FilterOutputStream {

    /**
     * Writes the given graph to the stream.
     *
     * @throws IOException when an input/output error occurs.
     */
    public void writeGraph(boolean[][] adjacencyMatrix) throws IOException {
        writeGraph(encode(adjacencyMatrix));
    }

    /**
     * Writes the given graph to the stream.
     *
     * @throws IOException when an input/output error occurs.
     */
    public void writeGraph(byte[] encoding) throws IOException {
        writeGraph(decode(encoding));
    }

    /**
     * Writes the graph info to the stream.
     *
     * @param graphInvariantValues a mapping from the invariant to its value
     * @throws IOException when an input/output error occurs.
     *
     * Note: this method is not implemented for most formats.
     */
    public void writeGraphInfo(Map<String, String> graphInvariantValues) throws IOException {
        //Not implemented for most formats
    }

    /**
     * Line separator string. This is the value of the line.separator property
     * at the moment that the stream was created.
     */
    private String lineSeparator;

    public void setLineSeparator(String lineSeparator) {
        this.lineSeparator = lineSeparator;
        lineSeparatorLength = lineSeparator.length();
    }

    /**
     * Length of the line separator string.
     */
    private int lineSeparatorLength;

    /**
     * Create an output stream of this type based on the given output stream.
     * When the given stream is not yet buffered, it is automatically wrapped in
     * a BufferedOutputStream.
     */
    protected GraphOutputStream(OutputStream os) {
        super(os instanceof BufferedOutputStream ? os
                : new BufferedOutputStream(os));
        setLineSeparator(
                System.getProperty("line.separator")
                );
    }

    /**
     * Output a line separator.
     */
    protected void writeLine() throws IOException {
        for (int i = 0; i < lineSeparatorLength; i++) {
            out.write(lineSeparator.charAt(i));
        }
    }
    
    /**
     * Output an ASCII string as consecutive bytes.
     */
    protected void writeString (String string) throws IOException {
        for (int i = 0; i < string.length(); i++) {
            out.write(string.charAt(i));
        }
    }

}
