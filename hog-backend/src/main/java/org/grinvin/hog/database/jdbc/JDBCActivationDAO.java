package org.grinvin.hog.database.jdbc;

import be.ugent.caagt.dao.helper.BaseDAC;
import be.ugent.caagt.dao.helper.BaseDAO;
import org.grinvin.hog.database.dao.ActivationDAO;
import org.grinvin.hog.database.entity.Activation;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.*;

public class JDBCActivationDAO extends BaseDAO implements ActivationDAO {

    public JDBCActivationDAO(BaseDAC baseDAC) {
        super(baseDAC);
    }

    private static Activation createActivation(ResultSet rs) throws SQLException {
        return new Activation(
                rs.getInt("activation_id"),
                rs.getInt("user_id"),
                rs.getTimestamp("expirationtime").toLocalDateTime(),
                rs.getString("token"),
                rs.getBoolean("pwreset")
        );
    }

    @Override
    public Activation getActivationById(int activationId) {
        return select("activation_id, user_id, expirationtime, token, pwreset").from("activation")
                .where("activation_id", activationId)
                .getObject(JDBCActivationDAO::createActivation);
    }

    @Override
    public Activation getActivationByToken(String token) {
        return select("activation_id, user_id, expirationtime, token, pwreset").from("activation")
                .where("token", token)
                .getObject(JDBCActivationDAO::createActivation);
    }

    @Override
    public int createActivation(int userId, LocalDateTime expirationTime, String token , boolean pwReset) {
        return insertInto("activation")
                .value("user_id", userId)
                .value("expirationtime", expirationTime)
                .value("token", token)
                .value("pwReset", pwReset)
                .create();
    }

    @Override
    public void deleteActivationByToken(String token) {
        deleteFrom("activation")
                .where("token", token)
                .execute();
    }

    @Override
    public void deleteActivationByUserId(int userId) {
        deleteFrom("activation")
                .where("user_id", userId)
                .execute();
    }
}
