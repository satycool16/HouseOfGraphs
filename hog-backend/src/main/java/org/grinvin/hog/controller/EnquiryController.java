package org.grinvin.hog.controller;

import be.ugent.caagt.dao.DataAccessException;
import be.ugent.caagt.dao.Page;
import org.grinvin.hog.assembler.GraphSearchModelAssembler;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.dao.EnquiryDAO;
import org.grinvin.hog.database.dao.GraphDAO;
import org.grinvin.hog.database.dao.InvariantDAO;
import org.grinvin.hog.database.entity.Graph;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.enquiry.DrawingEnquiry;
import org.grinvin.hog.enquiry.SearchConditions;
import org.grinvin.hog.model.GraphSearchModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/enquiry")
public class EnquiryController {

    @Autowired
    private GraphSearchModelAssembler graphSearchModelAssembler;
    @Autowired
    private PagedResourcesAssembler<Graph> pagedResourcesAssembler;

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    @PostMapping(value= "", consumes={"application/json"}, produces={"application/json"})
    public ResponseEntity<CollectionModel<GraphSearchModel>> searchGraphs(
            @RequestBody SearchConditions conds,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "15") int size,
            @RequestParam(defaultValue = "graph_id") String sort,
            @RequestParam(defaultValue = "asc") String sortDir
    ) {
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            Sort.Direction dir = sortDir.equals("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
            Pageable paging = PageRequest.of(page, size, Sort.by(dir, sort));
            List<Graph> graphsByInvariant = conds.handleMultipleConditions(dac.getEnquiryDAO());
            System.out.println(graphsByInvariant.size());
            int to = Math.min((page * size) + size, graphsByInvariant.size());
            List<Graph> wantedPage = graphsByInvariant.subList(page * size, to);
            org.springframework.data.domain.Page<Graph> res = new PageImpl<>(wantedPage, paging, graphsByInvariant.size());
            return new ResponseEntity<>(pagedResourcesAssembler.toModel(res, graphSearchModelAssembler), HttpStatus.OK);
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @PostMapping(value= "/drawing", consumes={"application/json"}, produces={"application/json"})
    public ResponseEntity<String> getCanonicalFromDrawing(@RequestBody DrawingEnquiry denq) {
        return new ResponseEntity<>(denq.getCanonicalForm(), HttpStatus.OK);
    }

    @PostMapping(value="/user", produces={"application/hal+json"})
    public ResponseEntity<CollectionModel<GraphSearchModel>> getGraphsByUserId(
            @RequestBody int userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "15") int size,
            @RequestParam(defaultValue = "graph_id") String sort,
            @RequestParam(defaultValue = "asc") String sortDir
    ){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            Sort.Direction dir = sortDir.equals("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
            Pageable paging = PageRequest.of(page, size, Sort.by(dir, sort));
            Page<Graph> allGraphsByUser = dac.getEnquiryDAO().getGraphsByUserId(paging, userId);
            org.springframework.data.domain.Page<Graph> res = new PageImpl<>(allGraphsByUser.getList(), paging, allGraphsByUser.getFullSize());
            return new ResponseEntity<>(pagedResourcesAssembler.toModel(res, graphSearchModelAssembler),
                    HttpStatus.OK
            );
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }
}

