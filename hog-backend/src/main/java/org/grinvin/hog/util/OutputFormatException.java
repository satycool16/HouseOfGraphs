/* OutputFormatException.java
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

package org.grinvin.hog.util;

/**
 * Exception thrown when a certain adjacency matrix could not be converted
 * to a certain format. This may happen, for example, when the graph has too
 * many verices.
 */
public class OutputFormatException extends RuntimeException {
    
    public OutputFormatException (String message) {
        super (message);
    }
    
}
