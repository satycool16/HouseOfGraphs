package org.grinvin.hog.enquiry;

public class GraphIdEnquiry implements Enquiry {
    private int graphId;

    public GraphIdEnquiry(){}

    public GraphIdEnquiry(int graphId){
        this.graphId = graphId;
    }

    public int getGraphId() {
        return graphId;
    }
}
