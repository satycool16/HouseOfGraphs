package org.grinvin.hog.database;

import org.grinvin.hog.database.dao.GraphInvariantDAO;
import org.grinvin.hog.database.dao.InvariantDAO;
import org.grinvin.hog.database.entity.GraphInvariant;
import org.junit.Before;
import org.junit.Test;

import java.util.List;
import static org.junit.Assert.*;

public class GraphInvariantDAOTest extends DAOTest {

    private GraphInvariantDAO graphInvariantDAO;
    private InvariantDAO invariantDAO;

    @Before
    public void getDAO() {
        graphInvariantDAO = context.getGraphInvariantDAO();
        invariantDAO = context.getInvariantDAO();
    }

    @Test
    public void getGraphInvariantsByGraphId(){
        List<GraphInvariant> graphInvariants = graphInvariantDAO.getGraphInvariantsByGraphId(26);
        assertEquals(36, graphInvariants.size());
        GraphInvariant gi1 = graphInvariants.stream().filter(gi -> gi.invariantId() == 1).findFirst().orElseThrow();
        assertEquals(0, gi1.invariantValue(), 0);
        assertEquals(4, gi1.invariantStatus());
        assertFalse(gi1.ofInterest());
        GraphInvariant gi2 = graphInvariants.stream().filter(gi -> gi.invariantId() == 2).findFirst().orElseThrow();
        assertEquals(4.571428571428571, gi2.invariantValue(), 0);
        assertEquals(4, gi2.invariantStatus());
        assertTrue(gi2.ofInterest());
        GraphInvariant gi3 = graphInvariants.stream().filter(gi -> gi.invariantId() == 3).findFirst().orElseThrow();
        assertEquals(0, gi3.invariantValue(), 0);
        assertEquals(4, gi3.invariantStatus());
        assertFalse(gi3.ofInterest());
    }

    @Test
    public void createGraphInvariant(){
        int id = invariantDAO.createInvariant("testDef", "test", "test", "t", "test.grinvin", 1);
        List<GraphInvariant> graphInvariants = graphInvariantDAO.getGraphInvariantsByGraphId(26);
        assertEquals(36, graphInvariants.size());
        graphInvariantDAO.createGraphInvariant(26, id, 2, 2.31, true);
        List<GraphInvariant> updatedGraphInvariants = graphInvariantDAO.getGraphInvariantsByGraphId(26);
        assertEquals(37, updatedGraphInvariants.size());
        GraphInvariant graphInvariant = updatedGraphInvariants.stream().filter(gi -> gi.invariantId() == id).findFirst().orElseThrow();
        assertEquals(2.31, graphInvariant.invariantValue(), 0);
    }
}
