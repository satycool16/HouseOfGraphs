/* InputFormatException.java
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
 * Exception thrown when seom input could not be converted to an adjacency matrix,
 * bacause it had the wrong format.
 */
public class InputFormatException extends RuntimeException {

    public InputFormatException(String message) {
        super(message);
    }
    
}
