package org.grinvin.hog.controller;

import be.ugent.caagt.dao.DataAccessException;
import org.grinvin.hog.assembler.EmbeddingModelAssembler;
import org.grinvin.hog.assembler.GraphModelAssembler;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.dao.EmbeddingDAO;
import org.grinvin.hog.database.dao.GraphDAO;
import org.grinvin.hog.database.entity.Comment;
import org.grinvin.hog.database.entity.Embedding;
import org.grinvin.hog.database.entity.Graph;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.model.EmbeddingModel;
import org.grinvin.hog.response_request_entities.AddCommentRequest;
import org.grinvin.hog.response_request_entities.AddEmbeddingRequest;
import org.grinvin.hog.response_request_entities.MessageResponse;
import org.grinvin.hog.security.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/api")
public class EmbeddingController {

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    @Autowired
    private UserService userService;
    @Autowired
    private EmbeddingModelAssembler embeddingModelAssembler;
    @Autowired
    private GraphModelAssembler graphModelAssembler;

    @GetMapping(value="/embeddings/{embedding_id}", produces={"application/hal+json"})
    public ResponseEntity<EmbeddingModel> getEmbeddingById(@PathVariable("embedding_id") int embeddingId){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            Optional<Embedding> embedding = Optional.ofNullable(dac.getEmbeddingDAO().getEmbeddingById(embeddingId));
            if(embedding.isPresent()){
                EmbeddingModel embeddingModel = embeddingModelAssembler.toModel(embedding.get());
                return new ResponseEntity<>(embeddingModel, HttpStatus.OK);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @GetMapping(value="/graphs/{graph_id}/embedding", produces={"application/hal+json"})
    public ResponseEntity<CollectionModel<EmbeddingModel>> getEmbeddingsByGraphId(@PathVariable("graph_id") int graphId){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            List<Embedding> allEmbeddingsByGraphId = dac.getEmbeddingDAO().getEmbeddingsByGraphId(graphId);
            CollectionModel<EmbeddingModel> embeddingModels = embeddingModelAssembler.toCollectionModel(allEmbeddingsByGraphId);
            embeddingModels.add(linkTo(methodOn(EmbeddingController.class).getEmbeddingsByGraphId(graphId)).withSelfRel());
            return new ResponseEntity<>(embeddingModels, HttpStatus.OK);
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @PostMapping(value= "/embeddings", consumes={"application/json"}, produces={"application/json"})
    @PreAuthorize("hasAnyRole('REGULAR', 'ADMIN')")
    public ResponseEntity<MessageResponse> addEmbedding(@RequestBody AddEmbeddingRequest addEmbeddingRequest) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            int key = dac.getEmbeddingDAO().createEmbedding(addEmbeddingRequest);
            if(key != -1){
                return ResponseEntity.ok(new MessageResponse(true, "Embedding added successfully!"));
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @PostMapping(value= "/remove_embedding", consumes={"application/json"}, produces={"application/json"})
    @PreAuthorize("hasAnyRole('REGULAR', 'ADMIN')")
    public ResponseEntity<MessageResponse> removeEmbedding(@RequestBody int embeddingId) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            EmbeddingDAO eDAO = dac.getEmbeddingDAO();
            GraphDAO gDAO = dac.getGraphDAO();
            User activeUser = userService.getUserProfile();
            Embedding embedding = eDAO.getEmbeddingById(embeddingId);
            if(embedding == null){
                return ResponseEntity.notFound().build();
            }
            Graph graph = gDAO.getGraphById(embedding.graphId());
            List<Embedding> allEmbeddingsByGraphId = eDAO.getEmbeddingsByGraphId(graph.graphId());
            // Admins can remove all embeddings, logged in users can delete embeddings of their own graphs
            // Embeddings can only be removed if it is not the only embedding for a graph!!
            if(activeUser != null && allEmbeddingsByGraphId.size() > 1 && (activeUser.userRole() == 2 || activeUser.userId() == graph.userId())){
                eDAO.deleteEmbedding(embeddingId);
                return ResponseEntity.ok(new MessageResponse(true, "Embedding removed successfully!"));
            } else {
                return new ResponseEntity<>(new MessageResponse(false, "Unauthorized to remove comment"), HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }

    }
}
