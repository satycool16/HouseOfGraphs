package org.grinvin.hog.database;

import org.grinvin.hog.database.dao.CalculateInvariantDAO;
import org.grinvin.hog.database.dao.GraphInvariantDAO;
import org.grinvin.hog.database.dao.InvariantDAO;
import org.grinvin.hog.database.entity.CalculateInvariant;
import org.grinvin.hog.database.entity.Invariant;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class InvariantDAOTest extends DAOTest {

    private InvariantDAO invariantDAO;
    private GraphInvariantDAO graphInvariantDAO;
    private CalculateInvariantDAO calculateInvariantDAO;

    @Before
    public void getDAO(){
        invariantDAO = context.getInvariantDAO();
        graphInvariantDAO = context.getGraphInvariantDAO();
        calculateInvariantDAO = context.getCalculateInvariantDAO();
    }


    @Test
    public void getInvariantById() {
        Invariant invariant = invariantDAO.getInvariantById(1);
        assertEquals(1, invariant.invariantId());
        assertEquals(1, invariant.calculateInvariantId());
        assertEquals("A graph is said to be <i>acyclic</i> if it contains no cycle.", invariant.definition());
        assertEquals("Acyclic", invariant.keyword());
        assertEquals("Acyclic", invariant.invariantName());
        assertEquals("b", invariant.typeName());
    }

    @Test
    public void getInvariantByKeyword() {
        Invariant invariant = invariantDAO.getInvariantByKeyword("Acyclic");
        assertEquals(1, invariant.invariantId());
        assertEquals(1, invariant.calculateInvariantId());
        assertEquals("A graph is said to be <i>acyclic</i> if it contains no cycle.", invariant.definition());
        assertEquals("Acyclic", invariant.keyword());
        assertEquals("Acyclic", invariant.invariantName());
        assertEquals("b", invariant.typeName());
    }

    @Test
    public void createInvariant() {
        int id = invariantDAO.createInvariant("testDef", "test", "test", "t", "test.grinvin", 1);
        Invariant invariant = invariantDAO.getInvariantById(id);
        assertEquals(id, invariant.invariantId());
        assertEquals("testDef", invariant.definition());
        assertEquals("test", invariant.keyword());
        assertEquals("test", invariant.invariantName());
        assertEquals("t", invariant.typeName());

        CalculateInvariant calculateInvariant = calculateInvariantDAO.getCalculateInvariantById(invariant.calculateInvariantId());
        assertEquals("test.grinvin", calculateInvariant.grinvinName());
        assertEquals(1, calculateInvariant.invariantLevel());
    }

    @Test
    public void deleteInvariant() {
        assertNotNull(invariantDAO.getInvariantById(1));
        assertEquals(36, graphInvariantDAO.getGraphInvariantsByGraphId(26).size());
        invariantDAO.deleteInvariant(1);
        assertNull(invariantDAO.getInvariantById(1));
        assertEquals(35, graphInvariantDAO.getGraphInvariantsByGraphId(26).size());
    }
}
