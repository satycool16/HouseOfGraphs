/*
This SQL scripts creates and fills the invariant table. The invariant table will be used for storing the different
invariants used in the application.
The fields in the table are:
	- invariant_id: Serial unique ID associated with the invariant
	- calculate_invariant_id: Reference to the calculate_invariant table which stores information about the calculation of the invariant
    - definition: Textual definition of the meaning of the invariant
    - grinvinname: Name of the invariant in the Grinvin application. This is created to create the foreign key to the
        calculate_invariant table, but is later removed again.
    - keyword: Shorter 'programming' name of the invariant (without spaces etc.)
    - invariantname: Name of the invariant
    - typename: Indicates whether the invariant returns an integer, real of boolean value
*/
CREATE TABLE invariant (
	invariant_id SERIAL PRIMARY KEY,
	calculate_invariant_id integer REFERENCES calculate_invariant (calculate_invariant_id)
        ON DELETE SET NULL,
	definition varchar(511),
	grinvinname varchar(255),
	keyword varchar(255) UNIQUE NOT NULL,
	invariantname varchar(255),
	typename varchar(255)
);

/* Information from the original invariant table is used to fill the table. */
INSERT INTO invariant(invariant_id, definition, grinvinname, keyword, invariantname, typename)
SELECT id, definition, grinvinname, keyword, name, typename
FROM t_invariant;

/* Create the foreign keys to the calculate_invariant table. */
UPDATE invariant
SET calculate_invariant_id = calculate_invariant.calculate_invariant_id
FROM calculate_invariant WHERE calculate_invariant.grinvinname = invariant.grinvinname;

/* Drop the grinvinname column after the foreign keys are created. */
ALTER TABLE invariant
DROP COLUMN grinvinname;

