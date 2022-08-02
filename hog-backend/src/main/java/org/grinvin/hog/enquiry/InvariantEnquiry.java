package org.grinvin.hog.enquiry;

public class InvariantEnquiry implements Enquiry {
    private int invariantId;
    private EnquiryOperator operator;
    private double value;

    public InvariantEnquiry(int invariantId, EnquiryOperator operator, double value){
        this.invariantId = invariantId;
        this.operator = operator;
        this.value = value;
    }

    public int getInvariantId() {
        return invariantId;
    }

    public EnquiryOperator getOperator() {
        return operator;
    }

    public double getValue() {
        return value;
    }
}
