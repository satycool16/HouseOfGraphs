import com.example.Graph;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.junit.jupiter.api.Test;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

public class Runner {

    @Test
    public void crud() throws FileNotFoundException, UnsupportedEncodingException {
        SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
        Session session = sessionFactory.openSession();
        Graph[] graphs = getAll(session);
        session.close();
        PrintWriter writer = new PrintWriter("embeddings.txt", "UTF-8");
        for(Graph g: graphs){
               writer.println(g);
        }
        writer.close();
    }

    public Graph[] getAll(Session session){
        session.beginTransaction();

        Query query=  session.createQuery("from Graph where  id > :id");
        query.setParameter("id", 0);

        Object[] graphs = query.list().toArray();

        Graph[] toReturn = new Graph[graphs.length];
        for (int i = 0; i < graphs.length; i++){
            toReturn[i] = (Graph)graphs[i];
        }

        session.close();
        return toReturn;
    }
}
