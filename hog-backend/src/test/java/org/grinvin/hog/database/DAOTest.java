package org.grinvin.hog.database;

import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.junit.After;
import org.junit.Before;

public class DAOTest extends DataSourceConfig {

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();
    DataAccessContext context;

    @Before
    public void begin(){
        context = dap.getDataAccessContext();
        context.begin();
    }

    @After
    public void end() throws Exception {
        context.rollback();
        context.close();
    }
}
