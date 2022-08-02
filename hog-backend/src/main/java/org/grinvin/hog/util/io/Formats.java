/* Formats.java
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

import java.util.ArrayList;
import java.util.Collection;

/**
 * Allows clients to obtain the list of available graph formats.
 */
public class Formats {

    private static Collection<Format> formats = new ArrayList<Format>();

    private static Collection<Format> inputFormats = new ArrayList<Format>();

    private static Collection<Format> outputFormats = new ArrayList<Format>();
    
    static {
        initFormats ();
    }
    
    private static void initFormats () {
        formats.add (new AdjacencyMatrixFormat());
        formats.add (new AdjacencyListFormat());
        formats.add (new Graph6Format());
        formats.add (new InvariantValueFormat());
        formats.add (new MulticodeFormat());
        
        for (Format f : formats) {
            if (f.supportsInput()) {
                inputFormats.add (f);
            }
            if (f.supportsOutput()) {
                outputFormats.add (f);
            }
        }
    }

    public static Iterable<Format> getFormats() {
        return formats;
    }

    public static Iterable<Format> getOutputFormats() {
        return outputFormats;
    }
    
    public static Iterable<Format> getInputFormats() {
        return inputFormats;
    }
    
    public static Iterable<String> getDisplayNames (Iterable<Format> formats) {
        Collection<String> result = new ArrayList<String> ();
        for (Format f : formats) {
            result.add(f.getDisplayName());
        }
        return result;
    }
    
    public static Iterable<String> getFileExtensions (Iterable<Format> formats) {
        Collection<String> result = new ArrayList<String> ();
        for (Format f : formats) {
            result.add(f.getFileExtension());
        }
        return result;
    }
    
    public static Format findByDisplayName (String name, Iterable<Format> formats) {
        for (Format f: formats) {
            if (f.getDisplayName().equals(name)) {
                return f;
            }
        }
        return  null;
    }

    public static Format findByFileExtension (String ext, Iterable<Format> formats) {
        for (Format f: formats) {
            if (f.getFileExtension().equals(ext)) {
                return f;
            }
        }
        return  null;
    }
}
