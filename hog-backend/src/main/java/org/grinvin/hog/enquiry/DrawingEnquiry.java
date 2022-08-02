package org.grinvin.hog.enquiry;
import org.grinvin.hog.util.graph.CanonicalForm;

import java.nio.charset.StandardCharsets;

import static org.grinvin.hog.util.graph.CanonicalForm.computeCanonicalFormAndEncode;

public class DrawingEnquiry implements Enquiry {
    private boolean[][] adjacencyMatrix;

    public DrawingEnquiry(){}

    public DrawingEnquiry(boolean[][] adjacencyMatrix){
        this.adjacencyMatrix = adjacencyMatrix;
    }

    public boolean[][] getAdjacencyMatrix() {
        return adjacencyMatrix;
    }

    public CanonicalFormEnquiry getCanonicalFormEnquiry() {
        String s = new String(computeCanonicalFormAndEncode(adjacencyMatrix), StandardCharsets.UTF_8);
        return new CanonicalFormEnquiry(s);
    }

    public String getCanonicalForm() {
        return new String(computeCanonicalFormAndEncode(adjacencyMatrix), StandardCharsets.UTF_8);
    }
}
