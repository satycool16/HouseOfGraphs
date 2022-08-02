package org.grinvin.hog.database;

import org.grinvin.hog.database.dao.CalculateInvariantDAO;
import org.grinvin.hog.database.entity.CalculateInvariant;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculateInvariantDAOTest extends DAOTest {

    private CalculateInvariantDAO dao;

    @Before
    public void getDAO(){
        dao = context.getCalculateInvariantDAO();
    }

    @Test
    public void getCalculateInvariantById(){
        CalculateInvariant ci = dao.getCalculateInvariantById(1);
        assertEquals(1, ci.calculateInvariantId());
        assertEquals("org.grinvin.invariants.Acyclic", ci.grinvinName());
    }
}
