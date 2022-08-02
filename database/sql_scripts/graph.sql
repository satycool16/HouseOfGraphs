/*
This SQL scripts creates and fills the graph table. The graph table will be used for storing the graphs in the database.
The fields in the table are:
	- graph_id: Serial unique ID associated with the graph
	- canonicalform: The canonical form of the graph, represented as an array of bytes
    - graphname: The (optional) name of the graph
    - user_id: Reference to the user who uploaded the graph
    - upload_id: Reference to the ID of the graph in the original database TODO - probably unnecessary
*/
CREATE TABLE graph (
	graph_id SERIAL PRIMARY KEY,
	canonicalform bytea NOT NULL UNIQUE,
	graphname varchar(255),
	user_id integer REFERENCES users (user_id)
	    ON DELETE RESTRICT,
	upload_id bigint
);

/* Information from the original graph table is used to fill the table. */
INSERT INTO graph(graph_id, canonicalform, graphname, user_id, upload_id)
SELECT id, canonicalform, name, owner_id, uploadid
FROM t_graph;
