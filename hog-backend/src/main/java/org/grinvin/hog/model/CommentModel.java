package org.grinvin.hog.model;

import org.grinvin.hog.database.entity.Comment;
import org.springframework.hateoas.RepresentationModel;

public class CommentModel extends RepresentationModel<CommentModel> {
    private Comment entity;

    public Comment getEntity(){
        return entity;
    }

    public void setEntity(Comment entity){
        this.entity = entity;
    }
}
