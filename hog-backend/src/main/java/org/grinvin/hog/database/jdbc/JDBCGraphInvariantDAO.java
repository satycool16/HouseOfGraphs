package org.grinvin.hog.database.jdbc;

import be.ugent.caagt.dao.helper.BaseDAC;
import be.ugent.caagt.dao.helper.BaseDAO;
import org.grinvin.hog.database.dao.GraphInvariantDAO;
import org.grinvin.hog.database.entity.GraphInvariant;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class JDBCGraphInvariantDAO extends BaseDAO implements GraphInvariantDAO {

    public JDBCGraphInvariantDAO(BaseDAC baseDAC) {
        super(baseDAC);
    }

    private static GraphInvariant createGraphInvariant(ResultSet rs) throws SQLException {
        return new GraphInvariant(
          rs.getInt("graph_id"),
          rs.getInt("invariant_id"),
          rs.getInt("invariantstatus"),
          rs.getDouble("invariantvalue"),
          rs.getBoolean("ofinterest")
        );
    }

    @Override
    public GraphInvariant getGraphInvariantByGraphIdInvariantId(int graphId, int invariantId) {
        return select("graph_id, invariant_id, invariantstatus, invariantvalue, ofinterest").from("graph_invariant")
                .where("graph_id", graphId)
                .where("invariant_id", invariantId)
                .getObject(JDBCGraphInvariantDAO::createGraphInvariant);
    }

    @Override
    public List<GraphInvariant> getGraphInvariantsByGraphId(int graphId) {
        return select("graph_id, invariant_id, invariantstatus, invariantvalue, ofinterest").from("graph_invariant")
                .where("graph_id", graphId)
                .getList(JDBCGraphInvariantDAO::createGraphInvariant);
    }

    @Override
    public int createGraphInvariant(int graphId, int invariantId, int invariantStatus, Double invariantValue, boolean ofInterest) {
        if(invariantValue == null){
            return insertInto("graph_invariant")
                    .value("graph_id", graphId)
                    .value("invariant_id", invariantId)
                    .value("invariantstatus", invariantStatus)
                    .value("ofinterest", ofInterest)
                    .create();
        } else {
            return insertInto("graph_invariant")
                    .value("graph_id", graphId)
                    .value("invariant_id", invariantId)
                    .value("invariantstatus", invariantStatus)
                    .value("invariantvalue", invariantValue)
                    .value("ofinterest", ofInterest)
                    .create();
        }
    }

    @Override
    public void updateGraphInvariant(int graphId, int invariantId, int invariantStatus, double invariantValue){
        update("graph_invariant")
                .set("invariantstatus", invariantStatus)
                .set("invariantvalue", invariantValue)
                .where("invariant_id", invariantId)
                .where("graph_id", graphId)
                .execute();
    }

    @Override
    public boolean allInvariantsComputed(int graphId){
        int cnt = select("count(*)").from("graph_invariant")
                .where("graph_id", graphId)
                .where("invariantstatus", 0)
                .getOneInt();
        return cnt == 0;
    }
}
