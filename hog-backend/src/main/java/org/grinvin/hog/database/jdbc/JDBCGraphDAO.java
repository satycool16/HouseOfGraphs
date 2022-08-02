package org.grinvin.hog.database.jdbc;

import be.ugent.caagt.dao.helper.BaseDAC;
import be.ugent.caagt.dao.helper.BaseDAO;
import org.grinvin.hog.database.dao.GraphDAO;
import org.grinvin.hog.database.entity.Graph;
import org.grinvin.hog.enquiry.InvariantEnquiry;
import org.grinvin.hog.response_request_entities.AddGraphRequest;

import java.nio.charset.StandardCharsets;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class JDBCGraphDAO extends BaseDAO implements GraphDAO {

    public JDBCGraphDAO(BaseDAC baseDAC) {
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
    public Graph getGraphById(int id) {
        return select("graph_id, canonicalform, graphname, user_id, upload_id").from("graph")
                .where("graph_id", id)
                .getObject(JDBCGraphDAO::createGraph);
    }

    @Override
    public List<Graph> getGraphByUserId(int id) {
        return select("graph_id, canonicalform, graphname, user_id, upload_id").from("graph")
                .where("user_id", id)
                .getList(JDBCGraphDAO::createGraph);
    }

    @Override
    public int createGraph(int userId, String name, byte[] canonical) {
        return insertInto("graph")
                .value("canonicalform", canonical)
                .value("graphname", name)
                .value("user_id", userId)
                .create();
    }

    @Override
    public Graph getGraphByCanonical(byte[] canonical){
        return select("graph_id, canonicalform, graphname, user_id, upload_id").from("graph")
                .where("canonicalform", canonical)
                .getObject(JDBCGraphDAO::createGraph);
    }

    @Override
    public void deleteGraph(int graphId){
        deleteFrom("graph")
                .where("graph_id", graphId)
                .execute();
    }
}
