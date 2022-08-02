package org.grinvin.hog.enquiry;

import org.grinvin.hog.database.dao.EnquiryDAO;
import org.grinvin.hog.database.entity.Graph;
import org.w3c.dom.Text;

import java.util.ArrayList;
import java.util.List;

import static org.grinvin.hog.util.graph.AdjacencyMatrix.decode;
import static org.grinvin.hog.util.graph.CanonicalForm.computeCanonicalFormAndEncode;

public class SearchConditions {
    private InvariantEnquiry[] invariantEnquiries;
    private InvariantRangeEnquiry[] invariantRangeEnquiries;
    private InterestingInvariantEnquiry[] interestingInvariantEnquiries;
    private GraphClassEnquiry[] graphClassEnquiries;
    private GraphIdEnquiry graphIdEnquiry;
    private CanonicalFormEnquiry canonicalFormEnquiry;
    private TextEnquiry[] textEnquiries;

    public SearchConditions(){}

    public SearchConditions(InvariantEnquiry[] invariantEnquiries, InvariantRangeEnquiry[] invariantRangeEnquiries,
                            InterestingInvariantEnquiry[] interestingInvariantEnquiries, GraphClassEnquiry[] graphClassEnquiries,
                            GraphIdEnquiry graphIdEnquiry, CanonicalFormEnquiry canonicalFormEnquiry,
                            TextEnquiry[] textEnquiries){
        this.invariantEnquiries = invariantEnquiries;
        this.invariantRangeEnquiries = invariantRangeEnquiries;
        this.interestingInvariantEnquiries = interestingInvariantEnquiries;
        this.graphClassEnquiries = graphClassEnquiries;
        this.graphIdEnquiry = graphIdEnquiry;
        this.canonicalFormEnquiry = canonicalFormEnquiry;
        this.textEnquiries = textEnquiries;
    }

    public InvariantEnquiry[] getInvariantEnquiries() {
        return invariantEnquiries;
    }

    public InvariantRangeEnquiry[] getInvariantRangeEnquiries() {
        return invariantRangeEnquiries;
    }

    public InterestingInvariantEnquiry[] getInterestingInvariantEnquiries() {
        return interestingInvariantEnquiries;
    }

    public GraphClassEnquiry[] getGraphClassEnquiries () {
        return graphClassEnquiries;
    }

    public GraphIdEnquiry getGraphIdEnquiry() {
        return graphIdEnquiry;
    }

    public CanonicalFormEnquiry getCanonicalFormEnquiry() {
        return canonicalFormEnquiry;
    }

    public TextEnquiry[] getTextEnquiries() {
        return textEnquiries;
    }

    public List<Graph> handleMultipleConditions(EnquiryDAO enquiryDAO){
        List<List<Graph>> res = new ArrayList<>();
        for(InvariantEnquiry invariantEnquiry: invariantEnquiries){
            res.add(enquiryDAO.getGraphsByInvariantEnquiry(invariantEnquiry));
        }

        for(InvariantRangeEnquiry invariantRangeEnquiry: invariantRangeEnquiries){
            res.add(enquiryDAO.getGraphsByInvariantRangeEnquiry(invariantRangeEnquiry));
        }

        for(InterestingInvariantEnquiry interestingInvariantEnquiry: interestingInvariantEnquiries){
            res.add(enquiryDAO.getGraphsByInterestingInvariantEnquiry(interestingInvariantEnquiry));
        }

        for(GraphClassEnquiry graphClassEnquiry: graphClassEnquiries){
            res.add(enquiryDAO.getGraphsByGraphClassEnquiry(graphClassEnquiry));
        }

        if(graphIdEnquiry != null){
            Graph g = enquiryDAO.getGraphByGraphId(graphIdEnquiry);
            if (g != null){
                res.add(new ArrayList<>(List.of(g)));
            }
        }

        if(canonicalFormEnquiry != null){
            byte[] canonicalForm = computeCanonicalFormAndEncode(decode(canonicalFormEnquiry.getCanonicalFormByteArray()));
            Graph g = enquiryDAO.getGraphByCanonicalForm(canonicalForm);
            if (g != null){
                res.add(new ArrayList<>(List.of(g)));
            }
        }

        for(TextEnquiry textEnquiry: textEnquiries){
            res.add(enquiryDAO.getGraphsByTextEnquiry(textEnquiry));
        }

        return intersectionOfGraphLists(res);
    }

    private List<Graph> intersectionOfGraphLists(List<List<Graph>> graphLists){
        if (graphLists.size() == 0){
            return new ArrayList<>();
        }

        while(graphLists.size() != 1){
            List<Graph> res = intersectGraphs(graphLists.get(0), graphLists.get(1));
            graphLists.remove(0);
            graphLists.remove(0);
            graphLists.add(res);
        }
        return graphLists.get(0);
    }

    private List<Graph> intersectGraphs(List<Graph> a, List<Graph> b){
        return a.stream().distinct().filter(b::contains).toList();
    }
}
