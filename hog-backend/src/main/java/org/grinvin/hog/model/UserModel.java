package org.grinvin.hog.model;

import org.grinvin.hog.database.entity.User;
import org.springframework.hateoas.RepresentationModel;


public class UserModel extends RepresentationModel<UserModel> {
    private User entity;
    private String fullname;

    public User getEntity() {
        return entity;
    }

    public void setEntity(User entity) {
        this.entity = entity;
        this.fullname = entity.firstname() + " " + entity.lastname();
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
}
