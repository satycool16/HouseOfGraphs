package org.grinvin.hog.calculate_invariants;

import be.ugent.caagt.dao.DataAccessException;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.response_request_entities.AddCommentRequest;
import org.grinvin.hog.response_request_entities.AddEmbeddingRequest;
import org.grinvin.hog.response_request_entities.AddGraphRequest;
import org.grinvin.hog.util.io.Format;
import org.grinvin.hog.util.io.GraphOutputStream;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import static org.grinvin.hog.util.io.Formats.getOutputFormats;

@Service
public class CalculatorService {

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    public int addGraph(AddGraphRequest addGraphRequest, byte[] canonical) throws InterruptedException, IOException {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            int graphId = dac.getGraphDAO().createGraph(addGraphRequest.getUserId(), addGraphRequest.getGraphName(), canonical);
            dac.getCommentDAO().createComment(new AddCommentRequest(graphId, addGraphRequest.getUserId(), addGraphRequest.getGraphInfo()));
            dac.getEmbeddingDAO().createEmbedding(new AddEmbeddingRequest(graphId, addGraphRequest.getEmbedding()));
            List<Integer> invariantIds = dac.getInvariantDAO().getAllInvariantIds();
            for(Integer i: invariantIds){
                dac.getGraphInvariantDAO().createGraphInvariant(graphId, i, 0, null, addGraphRequest.getInterestingInvariants().contains(i));
            }

            createInputFiles(graphId, canonical);

            String command = "./run_graph_calc.sh " + graphId;
            ProcessBuilder builder = new ProcessBuilder(command.split(" "));
            builder.directory(new File(System.getProperty("user.home") + "/Documents/Universiteit/2e_master/Thesis/HoG/invariants"));
            builder.start();

            return graphId;
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    private void createInputFiles(int graphId, byte[] canonical) throws IOException {
        for(Format format: getOutputFormats()){
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            GraphOutputStream go = format.getOutputStream(baos);
            go.writeGraph(canonical);
            go.close();
            Path filePath = Paths.get(System.getProperty("user.home") + "/Documents/Universiteit/2e_master/Thesis/HoG/invariants/temp/graph_"
                     + graphId + "." + format.getFileExtension());
            Path tempFile = Files.createFile(filePath );
            Files.write(tempFile, baos.toByteArray());
        }
    }

    private void checkAllCalculated(int graphId) throws IOException {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            if(dac.getGraphInvariantDAO().allInvariantsComputed(graphId)){
                for(Format f: getOutputFormats()){
                    Path temp = Paths.get(System.getProperty("user.home") + "/Documents/Universiteit/2e_master/Thesis/HoG/invariants/temp/graph_"
                            + graphId + "." + f.getFileExtension());
                    boolean result = Files.deleteIfExists(temp);
                    if (result) {
                        System.out.println("File successfully removed.");
                    } else {
                        System.out.println("File doesn't exist.");
                    }
                }
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }
}
