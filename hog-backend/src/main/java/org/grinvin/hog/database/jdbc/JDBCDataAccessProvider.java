package org.grinvin.hog.database.jdbc;

import be.ugent.caagt.dao.DataAccessException;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

import static org.grinvin.hog.database.DataSourceConfig.getDataSource;


public enum JDBCDataAccessProvider implements DataAccessProvider {

    INSTANCE();

    private final DataSource dataSource = getDataSource();

    private JDBCDataAccessProvider() {

    }

    public JDBCDataAccessProvider getInstance() {
        return INSTANCE;
    }

    @Override
    public DataAccessContext getDataAccessContext() throws DataAccessException {
        try {
            return new JDBCDataAccessContext(dataSource.getConnection());
        } catch (SQLException e) {
            throw new DataAccessException(e);
        }
    }
}
