package org.grinvin.hog.database;

import org.grinvin.hog.database.dao.EmbeddingDAO;
import org.grinvin.hog.database.entity.Embedding;
import org.grinvin.hog.response_request_entities.AddEmbeddingRequest;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

public class EmbeddingDAOTest extends DAOTest {
    private EmbeddingDAO dao;

    @Before
    public void getDAO(){
        dao = context.getEmbeddingDAO();
    }

    @Test
    public void getEmbeddingById(){
        Embedding embedding = dao.getEmbeddingById(13993);
        assertEquals(13993, embedding.embeddingId());
        assertEquals(32234, embedding.graphId());
        double[][] shouldEqual = {{-0.5079872204472844, 0.9894179894179893}, {1.0, 1.0}, {0.2332268370607029, 1.0}};
        assertArrayEquals(shouldEqual, embedding.embedding());
    }

    @Test
    public void getEmbeddingByGraphId(){
        List<Embedding> embeddings = dao.getEmbeddingsByGraphId(32234);
        assertEquals(1, embeddings.size());
        Embedding e = embeddings.get(0);
        assertEquals(13993, e.embeddingId());
        assertEquals(32234, e.graphId());
        double[][] shouldEqual = {{-0.5079872204472844, 0.9894179894179893}, {1.0, 1.0}, {0.2332268370607029, 1.0}};
        assertArrayEquals(shouldEqual, e.embedding());
        assertEquals(0, e.dimension());
    }

    @Test
    public void createEmbedding(){
        assertEquals(1, dao.getEmbeddingsByGraphId(32234).size());
        double[][] embedding = {{1.0, 1.0}, {-0.5079872204472844, 0.9894179894179893}, {0.2332268370607029, 1.0}};
        dao.createEmbedding(new AddEmbeddingRequest(32234, embedding));
        List<Embedding> embeddings = dao.getEmbeddingsByGraphId(32234);
        assertEquals(2, embeddings.size());
        Embedding e = embeddings.get(0);
        if(e.dimension() == 0){
            e = embeddings.get(1);
        }
        assertEquals(32234, e.graphId());
        assertArrayEquals(embedding, e.embedding());
        assertEquals(2, e.dimension());
    }

    @Test
    public void deleteEmbedding() {
        assertNotNull(dao.getEmbeddingById(13993));
        dao.deleteEmbedding(13993);
        assertNull(dao.getEmbeddingById(13993));
    }
}
