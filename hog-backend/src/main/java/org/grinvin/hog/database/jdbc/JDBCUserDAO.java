package org.grinvin.hog.database.jdbc;

import be.ugent.caagt.dao.Page;
import be.ugent.caagt.dao.helper.BaseDAC;
import be.ugent.caagt.dao.helper.BaseDAO;
import be.ugent.caagt.dao.helper.CompositeWhereClause;
import be.ugent.caagt.dao.helper.OrderedSQLStatement;
import org.grinvin.hog.database.dao.UserDAO;
import org.grinvin.hog.database.entity.Activation;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.response_request_entities.TableFilter;
import org.grinvin.hog.response_request_entities.UpdateNameRequest;
import org.grinvin.hog.security.UserDetailsImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class JDBCUserDAO extends BaseDAO implements UserDAO {

    public JDBCUserDAO(BaseDAC context){
        super(context);
    }

    private static User createUser(ResultSet rs) throws SQLException {
        return new User(
                rs.getInt("user_id"),
                rs.getBoolean("activated"),
                rs.getString("email"),
                rs.getString("password"),
                rs.getString("firstname"),
                rs.getString("lastname"),
                rs.getInt("userrole"),
                rs.getBoolean("usesmd5")
        );
    }

    @Override
    public int getNumberOfUsers(){
        return select("count(*)").from("users")
                .getOneInt();
    }

    @Override
    public User getUserById(int id){
        return select("user_id, activated, email, password, firstname, lastname, userrole, usesmd5").from("users")
                .where("user_id", id)
                .getObject(JDBCUserDAO::createUser);
    }

    @Override
    public User getUserByEmail(String email){
        return select("user_id, activated, email, password, firstname, lastname, userrole, usesmd5").from("users")
                .where("email", email)
                .getObject(JDBCUserDAO::createUser);
    }

    @Override
    public int createUser(String email, String password, String firstname, String lastname){
        return insertInto("users")
                .value("activated", false)
                .value("email", email)
                .value("password", password)
                .value("firstname", firstname)
                .value("lastname", lastname)
                .value("userrole", 1)
                .value("usesmd5", false)
                .create();
    }

    @Override
    public Page<User> getAllUsers(Pageable pageable, List<TableFilter> filters){
        String sortProp = "email";
        boolean sortDir = true;
        for(Sort.Order order: pageable.getSort()){
            sortProp = order.getProperty();
            sortDir = order.getDirection().equals(Sort.Direction.ASC);
        }

        CompositeWhereClause whereClause = new CompositeWhereClause();
        for(TableFilter f: filters){
            System.out.println(f.getKey() + ": " + f.getValue());
            if(f.getKey().equals("fullname")){
                whereClause = whereClause.where("LOWER(firstname || ' ' || lastname) LIKE LOWER('%' || ? || '%')", f.getValue());
            } else if(f.getKey().equals("user_id")){
                whereClause = whereClause.where("user_id::varchar(255) LIKE LOWER('%' || ? || '%')", f.getValue());
            }
            else {
                if(f.getType().equals("s")){
                    whereClause = whereClause.where("LOWER(" + f.getKey() + ") LIKE LOWER('%' || ? || '%')", f.getValue());
                } else if (f.getType().equals("b")) {
                    whereClause = whereClause.where(f.getKey(), f.getValue().equals("true"));
                } else if (f.getType().equals("i")) {
                    whereClause = whereClause.where(f.getKey(), Integer.parseInt(f.getValue()));
                }
            }
        }

        if(sortProp.equals("fullname")){
            return select("user_id, activated, email, password, firstname, lastname, userrole, usesmd5").from("users")
                    .where(whereClause)
                    .orderBy("firstname", sortDir)
                    .orderBy("lastname", sortDir)
                    .onlyPage(pageable.getPageNumber(), pageable.getPageSize())
                    .getPage(JDBCUserDAO::createUser);
        } else {
            return select("user_id, activated, email, password, firstname, lastname, userrole, usesmd5").from("users")
                    .where(whereClause)
                    .orderBy(sortProp, sortDir)
                    .onlyPage(pageable.getPageNumber(), pageable.getPageSize())
                    .getPage(JDBCUserDAO::createUser);
        }
    }

    @Override
    public User getUserByActivationToken(String activationToken) {
        return select("users.user_id, activated, email, password, firstname, lastname, userrole, usesmd5")
                .from("users JOIN activation ON users.user_id = activation.user_id")
                .where("token", activationToken)
                .getObject(JDBCUserDAO::createUser);
    }

    @Override
    public boolean userExistsByEmail(String email){
        int cnt = select("count(*)").from("users").where("email", email).getOneInt();
        return cnt == 1;
    }

    @Override
    public void activateUser(int userId){
        update("users")
                .set("activated", true)
                .where("user_id", userId)
                .execute();
    }

    @Override
    public void updatePassword(int userId, String password){
        update("users")
                .set("password", password)
                .set("usesmd5", false)
                .where("user_id", userId)
                .execute();
    }

    @Override
    public void updateName(UpdateNameRequest updateNameRequest) {
        update("users")
                .set("firstname", updateNameRequest.getFirstname())
                .set("lastname", updateNameRequest.getLastname())
                .where("user_id", updateNameRequest.getUserId())
                .execute();
    }

    // Remove account and anonymize data (GDPR)
    @Override
    public void anonymizeAccount(int userId){
        update("users")
                .set("firstname", "User")
                .set("lastname", "" + userId)
                .where("user_id", userId)
                .execute();
        sql("UPDATE users SET email=NULL, password=NULL WHERE user_id=?").parameter(userId).execute();
    }

    @Override
    public void deleteAccount(int userId){
        deleteFrom("users")
                .where("user_id", userId)
                .execute();
    }
}
