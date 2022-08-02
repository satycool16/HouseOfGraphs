package org.grinvin.hog.database.dao;

import be.ugent.caagt.dao.Page;
import be.ugent.caagt.dao.helper.GeneralSQLStatement;
import org.grinvin.hog.database.entity.Graph;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.enquiry.*;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface EnquiryDAO {
    List<Graph> getGraphsByInvariantEnquiry(InvariantEnquiry invariantEnquiry);
    List<Graph> getGraphsByInvariantRangeEnquiry(InvariantRangeEnquiry invariantRangeEnquiry);
    List<Graph> getGraphsByInterestingInvariantEnquiry(InterestingInvariantEnquiry interestingInvariantEnquiry);
    List<Graph> getGraphsByGraphClassEnquiry(GraphClassEnquiry graphClassEnquiry);
    Graph getGraphByGraphId(GraphIdEnquiry graphIdEnquiry);
    Graph getGraphByCanonicalForm(byte[] canonicalForm);
    List<Graph> getGraphsByTextEnquiry(TextEnquiry textEnquiry);
    Page<Graph> getPagedResults(Pageable pageable, String graphIdList);
    Page<Graph> getGraphsByUserId(Pageable pageable, int UserId);
}
