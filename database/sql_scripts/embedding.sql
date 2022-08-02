/*
This SQL scripts creates and fills the embedding table. The embedding table will be used for storing embeddings of the
graph in the database.
The fields in the table are:
	- embedding_id: Serial unique ID associated with the embedding
	- graph_id: Reference to the graph to which the embedding belongs
    - embedding: Mapping from each vertex of the graph to it's coordinates stored as a 2D array of doubles
    - dimension: Indicates if the embedding is 2D or 3D
*/
CREATE TABLE embedding (
	embedding_id SERIAL PRIMARY KEY,
	graph_id integer REFERENCES graph (graph_id)
        ON DELETE CASCADE,
	embedding double precision[][],
	dimension integer
);


