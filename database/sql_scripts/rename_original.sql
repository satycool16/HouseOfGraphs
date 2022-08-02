/* This SQL scripts renames all the tables in the original database to avoid conflicts, as some of the tables
   keep their name in the new database setup. */
ALTER TABLE comment RENAME TO t_comment;
ALTER TABLE graph RENAME TO t_graph;
ALTER TABLE graph_comment RENAME TO t_graph_comment;
ALTER TABLE graph_invariant RENAME TO t_graph_invariant;
ALTER TABLE graph_invariantvalues RENAME TO t_graph_invariantvalues;
ALTER TABLE invariant RENAME TO t_invariant;
ALTER TABLE usertable RENAME TO t_usertable;

