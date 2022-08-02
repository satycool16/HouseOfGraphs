package org.grinvin.hog.database;

import org.grinvin.hog.database.dao.ActivationDAO;
import org.grinvin.hog.database.dao.UserDAO;
import org.grinvin.hog.database.entity.Activation;
import org.grinvin.hog.database.entity.User;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.assertEquals;

public class UserDAOTest extends DAOTest {
    private UserDAO userDAO;
    private ActivationDAO activationDAO;

    @Before
    public void getDAO(){
        userDAO = context.getUserDAO();
        activationDAO = context.getActivationDAO();
    }

    @Test
    public void getUserById(){
        User user = userDAO.getUserById(25);
        assertEquals("GraPHedron", user.firstname());
        assertEquals("graphedron@test.ugent.be", user.email());
    }

    @Test
    public void getUserByEmail(){
        User user = userDAO.getUserByEmail("graphedron@test.ugent.be");
        assertEquals(25, user.userId());
        assertEquals("GraPHedron", user.firstname());
    }

    @Test
    public void getNumberOfUsers(){
        int cnt = userDAO.getNumberOfUsers();
        assertEquals(314, cnt);
    }

    /*@Test
    public void getAllUsers(){
        List<User> users = userDAO.getAllUsers();
        assertEquals(314, users.size());
    }*/

    @Test
    public void createUser(){
        int id = userDAO.createUser("email", "password", "firstname", "lastname");
        User newUser = userDAO.getUserById(id);
        assertEquals("email", newUser.email());
        assertEquals("password", newUser.password());
        assertEquals("firstname", newUser.firstname());
        assertEquals("lastname", newUser.lastname());
    }

    @Test
    public void getUserByActivation(){
        Activation activation = activationDAO.getActivationById(1);
        User user = userDAO.getUserByActivationToken(activation.token());
        assertEquals(25, user.userId());
        assertEquals("graphedron@test.ugent.be", user.email());
        assertEquals("GraPHedron", user.firstname());
    }
}
