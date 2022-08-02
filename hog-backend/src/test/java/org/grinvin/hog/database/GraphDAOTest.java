package org.grinvin.hog.database;

import org.grinvin.hog.database.dao.GraphDAO;
import org.grinvin.hog.database.entity.Graph;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class GraphDAOTest extends DAOTest {

    private GraphDAO dao;

    @Before
    public void getDAO(){
        dao = context.getGraphDAO();
    }

    @Test
    public void getGraphById(){
        Graph graph = dao.getGraphById(32234);
        assertEquals(32234, graph.graphId());
        assertEquals("Path-3 = Star-3", graph.graphName());
        assertEquals(20702, graph.userId());
    }
}
