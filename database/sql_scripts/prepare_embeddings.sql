ALTER TABLE graph DROP COLUMN canonicalform;
ALTER TABLE graph DROP COLUMN name;
ALTER TABLE graph DROP COLUMN numberofedges;
ALTER TABLE graph DROP COLUMN numberofvertices;
ALTER TABLE graph DROP COLUMN uploadid;
ALTER TABLE graph DROP COLUMN owner_id;

DROP TABLE comment, graph_comment, graph_invariant, graph_invariantvalues, invariant, usertable;

