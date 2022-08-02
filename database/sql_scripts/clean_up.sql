/* This SQL scripts cleans up the original database tables after all information is copied into the new tables. */
DROP TABLE t_comment, t_graph, t_graph_comment, t_graph_invariant, t_graph_invariantvalues, t_invariant, t_usertable;
DROP SEQUENCE hibernate_sequence;
