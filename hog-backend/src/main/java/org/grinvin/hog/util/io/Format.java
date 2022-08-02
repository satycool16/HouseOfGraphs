/* Format.java
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
 * Describes a format for input and output of point sets.
 */
public interface Format {
    
    // TODO: add specific exceptions for input/output

    
    /**
     * Does this format support input?
     */
    public boolean supportsInput ();

    /**
     * Does this format support output?
     */
    public boolean supportsOutput ();

    /**
     * Does this format support extensive output
     * (i.e. also outputting the invariant values)?
     */
    public boolean supportsExtensiveOutput ();
    
    /**
     * Name for this format. Could be used for example
     * as one of the choices in a dropdown box.
     */
    public String getDisplayName ();
    
    
    /**
     * Preferred file extension for this format. Dot
     * not included.
     */
    public String getFileExtension ();

    /**
     * Convert the given input stream to a stream of type {@link GraphInputStream}
     * suitable for this format.
     * 
     * @throws UnsupportedOperationException when this format does not support
     *         input.
     */
    public GraphInputStream getInputStream (InputStream in)
        throws UnsupportedOperationException, IOException;

    /**
     * Convert the given input stream to a stream of type {@link GraphOutputStream}
     * suitable for this format.
     * 
     * @throws UnsupportedOperationException when the format does not  support
     *         output.
     */
    public GraphOutputStream getOutputStream (OutputStream out)
        throws UnsupportedOperationException, IOException;
}
