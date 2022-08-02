package org.grinvin.hog.enquiry;

public enum EnquiryOperator {
    EQ("="),
    NE("!="),
    LT("<"),
    LE("<="),
    GT(">"),
    GE(">=");

    private final String operatorSymbol;

    private EnquiryOperator(String operatorSymbol) {
        this.operatorSymbol = operatorSymbol;
    }

    public String getOperatorSymbol() {
        return operatorSymbol;
    }
}
