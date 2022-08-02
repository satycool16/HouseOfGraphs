package org.grinvin.hog.database;

import org.grinvin.hog.database.dao.*;

public interface DataAccessContext extends AutoCloseable {

    ActivationDAO getActivationDAO();
    CalculateInvariantDAO getCalculateInvariantDAO();
    CommentDAO getCommentDAO();
    EmbeddingDAO getEmbeddingDAO();
    GraphDAO getGraphDAO();
    GraphInvariantDAO getGraphInvariantDAO();
    InvariantDAO getInvariantDAO();
    UserDAO getUserDAO();
    EnquiryDAO getEnquiryDAO();

    void begin();

    void commit();

    void rollback();
}
