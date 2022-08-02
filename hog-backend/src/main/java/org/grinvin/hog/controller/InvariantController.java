package org.grinvin.hog.controller;

import be.ugent.caagt.dao.DataAccessException;
import org.grinvin.hog.assembler.InvariantModelAssembler;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.dao.InvariantDAO;
import org.grinvin.hog.database.entity.Invariant;
import org.grinvin.hog.database.entity.User;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.model.InvariantModel;
import org.grinvin.hog.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/invariants")
public class InvariantController {

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    @Autowired
    private InvariantModelAssembler invariantModelAssembler;

    @GetMapping(value="", produces={"application/hal+json"})
    public ResponseEntity<CollectionModel<InvariantModel>> getAllInvariants(){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            List<Invariant> allInvariants = dac.getInvariantDAO().getAllInvariants();
            return new ResponseEntity<>(
                    invariantModelAssembler.toCollectionModel(allInvariants),
                    HttpStatus.OK
            );
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @GetMapping(value="/{invariant_id}", produces={"application/hal+json"})
    public ResponseEntity<InvariantModel> getInvariantById(@PathVariable("invariant_id") int invariantId){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            Optional<Invariant> invariant = Optional.ofNullable(dac.getInvariantDAO().getInvariantById(invariantId));
            if(invariant.isPresent()){
                return new ResponseEntity<>(invariantModelAssembler.toModel(invariant.get()), HttpStatus.OK);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new DataAccessException(e);
        }

    }
}
