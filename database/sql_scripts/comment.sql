/*
This SQL scripts creates and fills the comment table. The comment table will be used for storing comments on graphs in
the database.
The fields in the table are:
	- comment_id: Serial unique ID associated with the comment
	- graph_id: Reference to the graph on which was commented
    - user_id: Reference to the user who posted the comment
    - commenttime: Timestamp indicating the exact moment the comment was posted
	- text: The content of the comment
*/
CREATE TABLE comment (
	comment_id SERIAL PRIMARY KEY,
	graph_id integer REFERENCES graph (graph_id)
        ON DELETE CASCADE,
	user_id integer REFERENCES users (user_id)
        ON DELETE RESTRICT,
	commenttime timestamp NOT NULL,
	text varchar(1024) NOT NULL
);

/* Information from the original comment table is used to fill the table. */
INSERT INTO comment(comment_id, user_id, commenttime, text)
SELECT id, owner_id, stamp, text
FROM t_comment;

/* Information from the original graph_comment table is used to link the comment to the graph. */
UPDATE comment
SET graph_id = t_graph_comment.graph_id
FROM t_graph_comment WHERE t_graph_comment.comments_id = comment.comment_id;

