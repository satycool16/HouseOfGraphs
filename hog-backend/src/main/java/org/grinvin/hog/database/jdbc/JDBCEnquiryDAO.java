package org.grinvin.hog.database.jdbc;

import be.ugent.caagt.dao.Page;
import be.ugent.caagt.dao.helper.BaseDAC;
import be.ugent.caagt.dao.helper.BaseDAO;
import be.ugent.caagt.dao.helper.GeneralSQLStatement;
import org.grinvin.hog.database.dao.EnquiryDAO;
import org.grinvin.hog.database.entity.Graph;
import org.grinvin.hog.enquiry.*;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class JDBCEnquiryDAO extends BaseDAO implements EnquiryDAO {

    public JDBCEnquiryDAO(BaseDAC baseDAC) {
        super(baseDAC);
    }

    private static Graph createGraph(ResultSet rs) throws SQLException {
        return new Graph(
                rs.getInt("graph_id"),
                rs.getBytes("canonicalform"),
                rs.getString("graphname"),
                rs.getInt("user_id"),
                rs.getLong("upload_id")
        );
    }

    @Override
    public List<Graph> getGraphsByInvariantEnquiry(InvariantEnquiry invariantEnquiry) {
        return select("graph.graph_id, canonicalform, graphname, user_id, upload_id")
                .from("graph JOIN graph_invariant ON graph.graph_id = graph_invariant.graph_id")
                .where("invariant_id", invariantEnquiry.getInvariantId())
                .where("invariantvalue" + invariantEnquiry.getOperator().getOperatorSymbol() + " ?", invariantEnquiry.getValue())
                .getList(JDBCEnquiryDAO::createGraph);
    }

    @Override
    public List<Graph> getGraphsByInvariantRangeEnquiry(InvariantRangeEnquiry invariantRangeEnquiry) {
        return select("graph.graph_id, canonicalform, graphname, user_id, upload_id")
                .from("graph JOIN graph_invariant ON graph.graph_id = graph_invariant.graph_id")
                .where("invariant_id", invariantRangeEnquiry.getInvariantId())
                .where("invariantvalue >= ?", invariantRangeEnquiry.getFrom())
                .where("invariantvalue <= ?", invariantRangeEnquiry.getTo())
                .getList(JDBCEnquiryDAO::createGraph);
    }

    @Override
    public List<Graph> getGraphsByInterestingInvariantEnquiry(InterestingInvariantEnquiry interestingInvariantEnquiry) {
        return select("graph.graph_id, canonicalform, graphname, user_id, upload_id")
                .from("graph JOIN graph_invariant ON graph.graph_id = graph_invariant.graph_id")
                .where("invariant_id", interestingInvariantEnquiry.getInvariantId())
                .where("ofinterest", true)
                .getList(JDBCEnquiryDAO::createGraph);
    }

    @Override
    public List<Graph> getGraphsByGraphClassEnquiry(GraphClassEnquiry graphClassEnquiry) {
        return select("graph.graph_id, canonicalform, graphname, user_id, upload_id")
                .from("graph JOIN graph_invariant ON graph.graph_id = graph_invariant.graph_id")
                .where("invariant_id", graphClassEnquiry.getInvariantId())
                .where("invariantvalue", graphClassEnquiry.getHasClass() ? 1 : 0)
                .getList(JDBCEnquiryDAO::createGraph);
    }

    @Override
    public Graph getGraphByGraphId(GraphIdEnquiry graphIdEnquiry) {
        return select("graph_id, canonicalform, graphname, user_id, upload_id")
                .from("graph")
                .where("graph_id", graphIdEnquiry.getGraphId())
                .getObject(JDBCEnquiryDAO::createGraph);
    }

    @Override
    public Graph getGraphByCanonicalForm(byte[] canonicalForm) {
        return select("graph_id, canonicalform, graphname, user_id, upload_id")
                .from("graph")
                .where("canonicalform", canonicalForm)
                .getObject(JDBCEnquiryDAO::createGraph);
    }

    // TODO - SELECT DISTINCT ?
    @Override
    public List<Graph> getGraphsByTextEnquiry(TextEnquiry textEnquiry) {
        List<Graph> graphNameMatches = select("graph_id, canonicalform, graphname, user_id, upload_id")
                .from("graph")
                .where("LOWER(graphname) LIKE '%' || ? || '%'", textEnquiry.getSQLSearchString())
                .getList(JDBCEnquiryDAO::createGraph);

        List<Graph> commentMatches = select("graph.graph_id, canonicalform, graphname, graph.user_id, upload_id")
                .from("graph JOIN comment ON graph.graph_id = comment.graph_id")
                .where("LOWER(text) LIKE '%' || ? || '%'", textEnquiry.getSQLSearchString())
                .getList(JDBCEnquiryDAO::createGraph);

        graphNameMatches.addAll(commentMatches);
        return graphNameMatches.stream().distinct().collect(Collectors.toList());
    }

    @Override
    public Page<Graph> getPagedResults(Pageable pageable, String graphIdList) {
        String sortProp = "graph_id";
        boolean sortDir = true;
        /*for(Sort.Order order: pageable.getSort()){
            sortProp = order.getProperty();
            sortDir = order.getDirection().equals(Sort.Direction.ASC);
        }*/
        return select("DISTINCT(graph.graph_id), canonicalform, graphname, user_id, upload_id")
                .from("graph JOIN graph_invariant ON graph.graph_id = graph_invariant.graph_id")
                .where("graph.graph_id = ANY('{" + graphIdList + "}')")
                .orderBy(sortProp, sortDir)
                .onlyPage(pageable.getPageNumber(), pageable.getPageSize())
                .getPage(JDBCEnquiryDAO::createGraph);
    }

    @Override
    public Page<Graph> getGraphsByUserId(Pageable pageable, int userId){
        String sortProp = "graph_id";
        boolean sortDir = true;
        /*for(Sort.Order order: pageable.getSort()){
            sortProp = order.getProperty();
            sortDir = order.getDirection().equals(Sort.Direction.ASC);
        }*/
        return select("graph_id, canonicalform, graphname, user_id, upload_id").from("graph")
                .where("user_id", userId)
                .orderBy(sortProp, sortDir)
                .onlyPage(pageable.getPageNumber(), pageable.getPageSize())
                .getPage(JDBCEnquiryDAO::createGraph);
    }
}