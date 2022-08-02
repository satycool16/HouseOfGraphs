package org.grinvin.hog.enquiry;

public class GraphClassEnquiry implements Enquiry {
    private int invariantId;
    private boolean hasClass;

    public GraphClassEnquiry(){}

    public GraphClassEnquiry(int invariantId, boolean hasClass){
        this.invariantId = invariantId;
        this.hasClass = hasClass;
    }

    public int getInvariantId() {
        return invariantId;
    }

    public boolean getHasClass() {
        return hasClass;
    }
}
