package org.grinvin.hog.util.graph;

import be.ugent.caagt.nauty.SimpleNautyInterface;

import static org.grinvin.hog.util.graph.AdjacencyMatrix.encode;

public class CanonicalForm {

    public CanonicalForm(){}

    /*
     * Uses nauty compute the canonical labelling of the graph and encodes the
     * canonically labelled graph in graph6 code.
     */
    public static byte[] computeCanonicalFormAndEncode(boolean[][] originalGraph) {
        return encode(computeCanonicalForm(originalGraph));
    }

    /**
     * Compute the canonical form of the given adjacency matrix
     */
    private static boolean[][] computeCanonicalForm(boolean[][] originalGraph) {
        SimpleNautyInterface sni = SimpleNautyInterface.getInstance();
        sni.setAdjacencies(originalGraph);
        sni.compute();
        return sni.getAdjacencies();
    }

    /**
     * Compute the canonical form and reorder the given array of objects
     * accordingly.
     *
     * @param data of objects. one for each vertex of the original graph. Will
     * be reordered in the same way vertices are reordered to obtain the
     * canonical form. Is allowed to be null
     */
    public static boolean[][] computeCanonicalFormAndReorder(boolean[][] originalGraph, Object[] data) {
        SimpleNautyInterface sni = SimpleNautyInterface.getInstance();
        sni.setAdjacencies(originalGraph);
        sni.compute();
        if (data != null) {
            int[] labeling = sni.getCanonicalLabeling();
            Object[] canonicalData = new Object[data.length];
            for (int i = 0; i < data.length; i++) {
                canonicalData[i] = data[labeling[i]];
            }
            System.arraycopy(canonicalData, 0, data, 0, data.length);
        }
        return sni.getAdjacencies();
    }
}
