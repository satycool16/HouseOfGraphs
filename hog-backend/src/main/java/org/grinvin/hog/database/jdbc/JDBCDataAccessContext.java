package org.grinvin.hog.database.jdbc;

import be.ugent.caagt.dao.helper.BaseDAC;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.dao.*;

import java.sql.Connection;
import java.sql.SQLException;

public class JDBCDataAccessContext extends BaseDAC implements DataAccessContext {

    public JDBCDataAccessContext(Connection connection) throws SQLException {
        super(connection);
    }

    @Override
    public ActivationDAO getActivationDAO() {
        return new JDBCActivationDAO(this);
    }

    @Override
    public CalculateInvariantDAO getCalculateInvariantDAO() {
        return new JDBCCalculateInvariantDAO(this);
    }

    @Override
    public CommentDAO getCommentDAO() {
        return new JDBCCommentDAO(this);
    }

    @Override
    public EmbeddingDAO getEmbeddingDAO() {
        return new JDBCEmbeddingDAO(this);
    }

    @Override
    public GraphDAO getGraphDAO() {
        return new JDBCGraphDAO(this);
    }

    @Override
    public GraphInvariantDAO getGraphInvariantDAO() {
        return new JDBCGraphInvariantDAO(this);
    }

    @Override
    public InvariantDAO getInvariantDAO(){
        return new JDBCInvariantDAO(this);
    }

    @Override
    public UserDAO getUserDAO() {
        return new JDBCUserDAO(this);
    }

    @Override
    public EnquiryDAO getEnquiryDAO() {
        return new JDBCEnquiryDAO(this);
    }
}
