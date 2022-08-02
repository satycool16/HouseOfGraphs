/*
This SQL scripts creates and fills the graph_invariant table. The graph_invariant table will be used for storing
the values of the invariants for a specific graph. It also specifies which invariants are of interest for the graph.
The fields in the table are:
	- graph_id: Reference to the graph to which the value belongs
	- invariant_id: Reference to the invariant of which the value is stored
    - invariantstatus: Indicates whether the invariant is fully calculated, still calculating or has failed...
    - invariantvalue: The calculated result of the invariant for the specific graph
    - ofinterest: Indicates whether the invariant is of interest
*/
CREATE TABLE graph_invariant (
	graph_id integer REFERENCES graph (graph_id)
        ON DELETE CASCADE,
	invariant_id integer REFERENCES invariant (invariant_id)
        ON DELETE CASCADE,
	invariantstatus integer,
	invariantvalue double precision,
	ofinterest boolean NOT NULL
);

/* Information from the original graph_invariantvalues table is used to fill the graph_invariant table. */
INSERT INTO graph_invariant(graph_id, invariant_id, invariantstatus, invariantvalue, ofinterest)
SELECT graph_id, mapkey_id, invariantstatus, element, FALSE
FROM t_graph_invariantvalues;

/* The ofinterest field is updated based on presence in the original graph_invariant table */
UPDATE graph_invariant
SET ofinterest = TRUE
WHERE EXISTS (
	SELECT gi.graph_id, gi.interestinginvariants_id 
	FROM t_graph_invariant gi
	WHERE gi.graph_id = graph_invariant.graph_id AND gi.interestinginvariants_id = graph_invariant.invariant_id 
);

