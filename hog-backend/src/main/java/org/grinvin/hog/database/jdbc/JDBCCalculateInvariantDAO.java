package org.grinvin.hog.database.jdbc;

import be.ugent.caagt.dao.helper.BaseDAC;
import be.ugent.caagt.dao.helper.BaseDAO;
import org.grinvin.hog.database.dao.CalculateInvariantDAO;
import org.grinvin.hog.database.entity.CalculateInvariant;

import java.sql.ResultSet;
import java.sql.SQLException;

public class JDBCCalculateInvariantDAO extends BaseDAO implements CalculateInvariantDAO {

    public JDBCCalculateInvariantDAO(BaseDAC baseDAC) {
        super(baseDAC);
    }

    private static CalculateInvariant createCalculateInvariant(ResultSet rs) throws SQLException {
        return new CalculateInvariant(
          rs.getInt("calculate_invariant_id"),
          rs.getString("grinvinname"),
          rs.getInt("invariantlevel")
        );
    }

    @Override
    public CalculateInvariant getCalculateInvariantById(int calculateInvariantId) {
        return select("calculate_invariant_id, grinvinname, invariantlevel").from("calculate_invariant")
                .where("calculate_invariant_id", calculateInvariantId)
                .getObject(JDBCCalculateInvariantDAO::createCalculateInvariant);
    }
}
