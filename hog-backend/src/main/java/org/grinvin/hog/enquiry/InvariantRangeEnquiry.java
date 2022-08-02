package org.grinvin.hog.enquiry;

public class InvariantRangeEnquiry implements Enquiry {
    private int invariantId;
    private double from;
    private double to;

    public InvariantRangeEnquiry(int invariantId, double from, double to){
        this.invariantId = invariantId;
        this.from = from;
        this.to = to;
    }

    public int getInvariantId() {
        return invariantId;
    }

    public double getFrom() {
        return from;
    }

    public double getTo() {
        return to;
    }
}
