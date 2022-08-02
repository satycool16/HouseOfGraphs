package org.grinvin.hog.enquiry;

public class InterestingInvariantEnquiry implements Enquiry {
    private int invariantId;

    public InterestingInvariantEnquiry(){}

    public InterestingInvariantEnquiry(int invariantId){
        this.invariantId = invariantId;
    }

    public int getInvariantId() {
        return invariantId;
    }
}
