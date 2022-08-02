package org.grinvin.hog.database.jdbc;

import be.ugent.caagt.dao.helper.BaseDAC;
import be.ugent.caagt.dao.helper.BaseDAO;
import org.grinvin.hog.database.dao.InvariantDAO;
import org.grinvin.hog.database.entity.Invariant;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class JDBCInvariantDAO extends BaseDAO implements InvariantDAO {

    public JDBCInvariantDAO(BaseDAC baseDAC) {
        super(baseDAC);
    }

    private static Invariant createInvariant(ResultSet rs) throws SQLException {
        return new Invariant(
          rs.getInt("invariant_id"),
          rs.getInt("calculate_invariant_id"),
          rs.getString("definition"),
          rs.getString("keyword"),
          rs.getString("invariantname"),
          rs.getString("typename")
        );
    }

    @Override
    public int countInvariants() {
        return select("count(*)").from("invariant").getOneInt();
    }

    @Override
    public List<Integer> getAllInvariantIds() {
        return select("invariant_id").from("invariant").getList(resultSet -> resultSet.getInt("invariant_id"));
    }

    @Override
    public List<Invariant> getAllInvariants(){
        return select("invariant_id, calculate_invariant_id, definition, keyword, invariantname, typename").from("invariant")
                .getList(JDBCInvariantDAO::createInvariant);
    }

    @Override
    public Invariant getInvariantById(int invariantId) {
        return select("invariant_id, calculate_invariant_id, definition, keyword, invariantname, typename").from("invariant")
                .where("invariant_id", invariantId)
                .getObject(JDBCInvariantDAO::createInvariant);
    }

    @Override
    public Invariant getInvariantByKeyword(String keyword) {
        return select("invariant_id, calculate_invariant_id, definition, keyword, invariantname, typename").from("invariant")
                .where("keyword", keyword)
                .getObject(JDBCInvariantDAO::createInvariant);
    }

    @Override
    // TODO - Adding a new invariant means calculating it for all graphs in the database
    public int createInvariant(String definition, String keyword, String invariantName, String typename, String grinvinName, int invariantLevel) {
        int calculate_invariant_id = insertInto("calculate_invariant")
                                        .value("grinvinname", grinvinName)
                                        .value("invariantlevel", invariantLevel)
                                        .create();

        return insertInto("invariant")
                .value("calculate_invariant_id", calculate_invariant_id)
                .value("definition", definition)
                .value("keyword", keyword)
                .value("invariantname", invariantName)
                .value("typename", typename)
                .create();
    }

    @Override
    public void deleteInvariant(int invariantId) {
        deleteFrom("invariant")
                .where("invariant_id", invariantId)
                .execute();
    }
}
