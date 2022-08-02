package org.grinvin.hog.controller;

import be.ugent.caagt.dao.DataAccessException;
import org.grinvin.hog.assembler.GraphInvariantModelAssembler;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.dao.GraphInvariantDAO;
import org.grinvin.hog.database.entity.GraphInvariant;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.model.GraphInvariantModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@RestController
@RequestMapping("/api")
public class GraphInvariantController {
    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    @Autowired
    private GraphInvariantModelAssembler graphInvariantModelAssembler;

    @GetMapping(value="/graph_invariants/{graph_id}/{invariant_id}", produces={"application/hal+json"})
    public ResponseEntity<GraphInvariantModel> getGraphInvariantByGraphIdInvariantId(@PathVariable("graph_id") int graphId, @PathVariable("invariant_id") int invariantId) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            GraphInvariantDAO giDAO = dac.getGraphInvariantDAO();
            Optional<GraphInvariant> graphInvariant = Optional.ofNullable(giDAO.getGraphInvariantByGraphIdInvariantId(graphId, invariantId));
            if (graphInvariant.isPresent()) {
                GraphInvariantModel graphInvariantModel = graphInvariantModelAssembler.toModel(graphInvariant.get());
                return new ResponseEntity<>(graphInvariantModel, HttpStatus.OK);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @GetMapping(value="/graphs/{graph_id}/invariants", produces={"application/hal+json"})
    public ResponseEntity<CollectionModel<GraphInvariantModel>> getGraphInvariantsByGraphId(@PathVariable("graph_id") int graphId){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            GraphInvariantDAO giDAO = dac.getGraphInvariantDAO();
            List<GraphInvariant> graphInvariants = giDAO.getGraphInvariantsByGraphId(graphId);
            CollectionModel<GraphInvariantModel> graphInvariantModels = graphInvariantModelAssembler.toCollectionModel(graphInvariants);
            graphInvariantModels.add(linkTo(methodOn(GraphInvariantController.class).getGraphInvariantsByGraphId(graphId)).withSelfRel());
            return new ResponseEntity<>(graphInvariantModels, HttpStatus.OK);
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }
}
