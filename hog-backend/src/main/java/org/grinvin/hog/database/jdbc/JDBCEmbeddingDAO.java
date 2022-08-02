package org.grinvin.hog.database.jdbc;

import be.ugent.caagt.dao.helper.BaseDAC;
import be.ugent.caagt.dao.helper.BaseDAO;
import org.grinvin.hog.database.dao.EmbeddingDAO;
import org.grinvin.hog.database.entity.Embedding;
import org.grinvin.hog.response_request_entities.AddEmbeddingRequest;

import java.sql.Array;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

public class JDBCEmbeddingDAO extends BaseDAO implements EmbeddingDAO {

    public JDBCEmbeddingDAO(BaseDAC baseDAC) {
        super(baseDAC);
    }

    private static Embedding createEmbedding(ResultSet rs) throws SQLException {
        Array a = rs.getArray("embedding");
        Double[][] b = new Double[0][0];
        if (a != null){
            b = (Double[][]) a.getArray();
        }
        double[][] embedding = new double[b.length][2];
        for(int i = 0; i < b.length; i++) {
            for(int j = 0; j < 2; j++){
                embedding[i][j] = b[i][j];
            }
        }
        return new Embedding(
          rs.getInt("embedding_id"),
          rs.getInt("graph_id"),
          embedding,
          rs.getInt("dimension")
        );
    }

    @Override
    public Embedding getEmbeddingById(int embeddingId){
        return select("embedding_id, graph_id, embedding, dimension").from("embedding")
                .where("embedding_id", embeddingId)
                .getObject(JDBCEmbeddingDAO::createEmbedding);
    }

    @Override
    public List<Embedding> getEmbeddingsByGraphId(int graphId) {
        return select("embedding_id, graph_id, embedding, dimension").from("embedding")
                .where("graph_id", graphId)
                .getList(JDBCEmbeddingDAO::createEmbedding);
    }
    @Override
    public int createEmbedding(AddEmbeddingRequest addEmbeddingRequest) {
        return insertInto("embedding")
                .value("graph_id", addEmbeddingRequest.getGraphId())
                .value("embedding", addEmbeddingRequest.getEmbedding())
                .value("dimension", 2)
                .create();
    }

    @Override
    public void deleteEmbedding(int embeddingId) {
        deleteFrom("embedding")
                .where("embedding_id", embeddingId)
                .execute();
    }
}
