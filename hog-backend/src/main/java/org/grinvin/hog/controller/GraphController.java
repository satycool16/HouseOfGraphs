package org.grinvin.hog.controller;

import be.ugent.caagt.dao.DataAccessException;
import org.grinvin.hog.assembler.DetailedGraphModelAssembler;
import org.grinvin.hog.assembler.GraphModelAssembler;
import org.grinvin.hog.calculate_invariants.CalculatorService;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.dao.CommentDAO;
import org.grinvin.hog.database.dao.GraphDAO;
import org.grinvin.hog.database.entity.*;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.enquiry.SearchConditions;
import org.grinvin.hog.model.DetailedGraphModel;
import org.grinvin.hog.model.GraphModel;
import org.grinvin.hog.response_request_entities.*;
import org.grinvin.hog.security.UserService;
import org.grinvin.hog.util.graph.Embedder;
import org.grinvin.hog.util.graph.InvariantUtils;
import org.grinvin.hog.util.io.Format;
import org.grinvin.hog.util.io.Formats;
import org.grinvin.hog.util.io.GraphInputStream;
import org.grinvin.hog.util.io.GraphOutputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

import static org.grinvin.hog.util.graph.AdjacencyMatrix.encode;
import static org.grinvin.hog.util.graph.CanonicalForm.computeCanonicalFormAndEncode;
import static org.grinvin.hog.util.graph.CanonicalForm.computeCanonicalFormAndReorder;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/api")
public class GraphController {

    @Value("${maxNumberofVertices}")
    private int maxNumberofVertices;

    @Value("${maxNumberToDownload}")
    private int maxNumberToDownload;

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    @Autowired
    private UserService userService;

    @Autowired
    private DetailedGraphModelAssembler detailedGraphModelAssembler;
    @Autowired
    private GraphModelAssembler graphModelAssembler;
    @Autowired
    private CalculatorService calculatorService;

    @GetMapping(value="/graphs/{graph_id}", produces={"application/hal+json"})
    public ResponseEntity<DetailedGraphModel> getGraphById(@PathVariable("graph_id") int graphId){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            Optional<Graph> graph = Optional.ofNullable(dac.getGraphDAO().getGraphById(graphId));
            if(graph.isPresent()){
                DetailedGraphModel detailedGraphModel = detailedGraphModelAssembler.toModel(graph.get());
                return new ResponseEntity<>(detailedGraphModel, HttpStatus.OK);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }

    }

    @GetMapping(value="/users/{user_id}/graphs", produces={"application/hal+json"})
    public ResponseEntity<CollectionModel<GraphModel>> getGraphsByUserId(@PathVariable("user_id") int userId){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            List<Graph> allGraphsByUser = dac.getGraphDAO().getGraphByUserId(userId);
            CollectionModel<GraphModel> graphModels = graphModelAssembler.toCollectionModel(allGraphsByUser);
            graphModels.add(linkTo(methodOn(GraphController.class).getGraphsByUserId(userId)).withSelfRel());
            return new ResponseEntity<>(graphModels, HttpStatus.OK);
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @PostMapping(value="/check_graph", produces={"application/hal+json"})
    public ResponseEntity<MessageResponse> checkGraphExistence(@RequestBody boolean[][] adj) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            byte[] canonical = computeCanonicalFormAndEncode(adj);

            Graph g = dac.getGraphDAO().getGraphByCanonical(canonical);
            if(g != null){
                return ResponseEntity.ok(new MessageResponse(false, "" + g.graphId()));
            }
            return ResponseEntity.ok(new MessageResponse(true, "This graph isn't present in the database yet."));
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @PostMapping(value="/graphs_drawing", produces={"application/hal+json"})
    public ResponseEntity<MessageResponse> addGraphByDrawing(@RequestBody AddGraphRequest addGraphRequest) throws InterruptedException, IOException {
        boolean[][] canonicalAdjacency = computeCanonicalFormAndReorder(addGraphRequest.getAdjacencyMatrix(), addGraphRequest.getEmbedding());
        byte[] canonical = encode(canonicalAdjacency);
        int graphId = calculatorService.addGraph(addGraphRequest, canonical);
        return ResponseEntity.ok(new MessageResponse(true, graphId + ""));
    }

    @GetMapping(value="/graph_input_formats", produces={"application/hal+json"})
    public ResponseEntity<List<GraphFormat>> getGraphInputFormats(){
        Iterable<Format> inputFormats = Formats.getInputFormats();
        List<GraphFormat> formats =  new ArrayList<>();
        for(Format f: inputFormats){
            formats.add(new GraphFormat(f.getDisplayName(), f.getFileExtension()));
        }
        return new ResponseEntity<>(formats, HttpStatus.OK);
    }

    @PostMapping(value="/graphs_file", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE }, produces={"application/hal+json"})
    public ResponseEntity<MessageResponse> addGraphByFile(@RequestPart MultipartFile file, @RequestPart AddGraphFileRequest addGraphRequest) throws InterruptedException, IOException {
        Format format = Formats.findByDisplayName(addGraphRequest.getFileFormat(), Formats.getInputFormats());
        if (format == null) {
            return ResponseEntity.ok(new MessageResponse(false, "Format not supported for input"));
        }

        try (GraphInputStream gis = format.getInputStream(file.getInputStream())) {
            boolean[][] adjMatrix;
            try {
                adjMatrix = gis.readGraph();
            } catch (Exception e) {
                return ResponseEntity.ok(new MessageResponse(false, "Failed to create graph based on given file and format"));
            }

            if (adjMatrix.length > maxNumberofVertices) {
                return ResponseEntity.ok(new MessageResponse(false, "Graph can't have more than " + maxNumberofVertices + "vertices"));
            }

            byte[] canonical = computeCanonicalFormAndEncode(adjMatrix);

            // Check if graph already exists in the database
            try (DataAccessContext dac = dap.getDataAccessContext()) {
                Graph g = dac.getGraphDAO().getGraphByCanonical(canonical);
                if (g != null) {
                    return ResponseEntity.ok(new MessageResponse(false, "Graph already exists:" + g.graphId()));
                }
            } catch (Exception e) {
                throw new DataAccessException(e);
            }

            // Compute embedding for the graph
            Embedder embedder = new Embedder();
            embedder.setAdjacencyMatrix(adjMatrix);
            embedder.computeEmbedding();

            AddGraphRequest agr = new AddGraphRequest(addGraphRequest.getGraphName(), addGraphRequest.getGraphInfo(),
                    addGraphRequest.getUserId(), embedder.getEmbedding(), addGraphRequest.getInterestingInvariants(), adjMatrix);
            int graphId = calculatorService.addGraph(agr, canonical);
            return ResponseEntity.ok(new MessageResponse(true, graphId + ""));

        } catch (IOException ex) {
            return ResponseEntity.ok(new MessageResponse(false, "Something went wrong while reading the file"));
        }
    }

    @GetMapping(value="/graph_output_formats", produces={"application/hal+json"})
    public ResponseEntity<List<GraphFormat>> getGraphOutputFormats(){
        Iterable<Format> outputFormats = Formats.getOutputFormats();
        List<GraphFormat> formats =  new ArrayList<>();
        for(Format f: outputFormats){
            formats.add(new GraphFormat(f.getDisplayName(), f.getFileExtension()));
        }
        return new ResponseEntity<>(formats, HttpStatus.OK);
    }

    @GetMapping(value="/max_download", produces={"application/hal+json"})
    public ResponseEntity<Integer> getMaxDownloadNumber(){
        return new ResponseEntity<>(maxNumberToDownload, HttpStatus.OK);
    }

    private void outputGraph(Format format, Graph graph, GraphOutputStream out) throws IOException {
        out.writeGraph(graph.canonicalForm());
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            if(format.supportsExtensiveOutput()) {
                // Using TreeMap to make sure the invariants are listed in alphabetical order
                Map<String, String> graphInvariantValues = new TreeMap<>();
                for(GraphInvariant giv : dac.getGraphInvariantDAO().getGraphInvariantsByGraphId(graph.graphId())) {
                    Invariant i = dac.getInvariantDAO().getInvariantById(giv.invariantId());
                    graphInvariantValues.put(i.invariantName(), InvariantUtils.toString(giv.invariantStatus(),
                            i.typeName(), giv.invariantValue()));
                }
                out.writeGraphInfo(graphInvariantValues);
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @PostMapping(value="/download_graph", produces={"application/hal+json"})
    public ResponseEntity<InputStreamResource> downloadGraph(@RequestBody DownloadRequest downloadRequest)  {
        Format format = Formats.findByDisplayName(downloadRequest.getFormat(), Formats.getOutputFormats());
        if (format == null) {
            return ResponseEntity.badRequest().build();
        }

        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            GraphOutputStream out = format.getOutputStream(baos);

            try (DataAccessContext dac = dap.getDataAccessContext()) {
                if(downloadRequest.getGraphId() == -1){
                    List<Graph> graphsByInquiry = downloadRequest.getSearchConditions().handleMultipleConditions(dac.getEnquiryDAO());
                    for(int i=0; i<Math.min(graphsByInquiry.size(), maxNumberToDownload); i++){
                        outputGraph(format, graphsByInquiry.get(i), out);
                    }

                } else {
                    Graph g = dac.getGraphDAO().getGraphById(downloadRequest.getGraphId());
                    if (g == null) {
                        return ResponseEntity.badRequest().build();
                    }
                    outputGraph(format, g, out);
                }
                out.close();
            } catch (Exception e) {
                throw new DataAccessException(e);
            }

            InputStream inputStream = new ByteArrayInputStream(baos.toByteArray());

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .body(new InputStreamResource(inputStream));
        } catch (IOException ex) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value= "/graphs/remove_graph", consumes={"application/json"}, produces={"application/json"})
    @PreAuthorize("hasAnyRole('REGULAR', 'ADMIN')")
    public ResponseEntity<MessageResponse> removeGraph(@RequestBody int graphId) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            GraphDAO gDao = dac.getGraphDAO();
            User activeUser = userService.getUserProfile();
            Graph graph = gDao.getGraphById(graphId);
            if(graph == null){
                return ResponseEntity.notFound().build();
            }
            // Admins can remove all graphs, logged in users can delete their own graphs
            if(activeUser != null && (activeUser.userId() == graph.userId() || activeUser.userRole() == 2)){
                gDao.deleteGraph(graphId);
                return ResponseEntity.ok(new MessageResponse(true, "Graph removed successfully!"));
            } else {
                return new ResponseEntity<>(new MessageResponse(false, "Unauthorized to remove graph"), HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }

    }
}
