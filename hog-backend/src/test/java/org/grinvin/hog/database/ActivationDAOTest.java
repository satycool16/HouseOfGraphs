package org.grinvin.hog.database;

import org.grinvin.hog.database.dao.ActivationDAO;
import org.grinvin.hog.database.entity.Activation;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDateTime;

import static org.junit.Assert.*;

public class ActivationDAOTest extends DAOTest {

    private ActivationDAO dao;

    @Before
    public void getDAO(){
        dao = context.getActivationDAO();
    }

    @Test
    public void getActivationById(){
        Activation activation = dao.getActivationById(1);
        assertEquals(1, activation.activationId());
        assertEquals(25, activation.userId());
        assertEquals("87663340", activation.token());
    }

    @Test
    public void getActivationByToken(){
        Activation activation = dao.getActivationByToken("87663340");
        assertEquals(1, activation.activationId());
        assertEquals(25, activation.userId());
        assertEquals("87663340", activation.token());
    }

    @Test
    public void createActivation(){
        int id = dao.createActivation(25, LocalDateTime.now(), "test",true);
        Activation newActivation = dao.getActivationById(id);
        assertEquals(25, newActivation.userId());
        assertTrue(newActivation.pwReset());
        assertEquals("test_token", newActivation.token());
    }

    @Test
    public void deleteActivationByToken() {
        dao.deleteActivationByToken("87663340");
        Activation activation = dao.getActivationByToken("87663340");
        assertNull(activation);
    }
}
