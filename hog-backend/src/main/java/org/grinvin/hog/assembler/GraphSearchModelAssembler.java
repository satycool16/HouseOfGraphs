package org.grinvin.hog.assembler;

import be.ugent.caagt.dao.DataAccessException;
import org.grinvin.hog.controller.CommentController;
import org.grinvin.hog.controller.GraphController;
import org.grinvin.hog.controller.GraphInvariantController;
import org.grinvin.hog.controller.UserController;
import org.grinvin.hog.database.DataAccessContext;
import org.grinvin.hog.database.DataAccessProvider;
import org.grinvin.hog.database.dao.EmbeddingDAO;
import org.grinvin.hog.database.dao.EnquiryDAO;
import org.grinvin.hog.database.dao.GraphInvariantDAO;
import org.grinvin.hog.database.entity.Graph;
import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.grinvin.hog.model.GraphModel;
import org.grinvin.hog.model.GraphSearchModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

@Component
public class GraphSearchModelAssembler extends RepresentationModelAssemblerSupport<Graph, GraphSearchModel> {

    private final DataAccessProvider dap = JDBCDataAccessProvider.INSTANCE.getInstance();

    public GraphSearchModelAssembler() {
        super(GraphController.class, GraphSearchModel.class);
    }

    @Override
    public GraphSearchModel toModel(Graph entity){
        try (DataAccessContext dac = dap.getDataAccessContext()) {
            GraphSearchModel graphSearchModel = instantiateModel(entity);
            graphSearchModel.setGraphId(entity.graphId());
            graphSearchModel.setGraphName(entity.graphName());
            graphSearchModel.setInvariantValues(dac.getGraphInvariantDAO().getGraphInvariantsByGraphId(entity.graphId()));
            graphSearchModel.calculateAdjacency(entity.canonicalForm());
            graphSearchModel.setEmbedding(dac.getEmbeddingDAO().getEmbeddingsByGraphId(entity.graphId()).get(0).embedding());
            //graphSearchModel.add(linkTo(methodOn(GraphController.class).getGraphById(entity.graphId())).withSelfRel());
            return graphSearchModel;
        } catch (Exception e) {
            throw new DataAccessException(e);
        }
    }

    @Override
    public CollectionModel<GraphSearchModel> toCollectionModel(Iterable<? extends Graph> entities){
        CollectionModel<GraphSearchModel> graphModels = super.toCollectionModel(entities);
        return graphModels;
    }
}
