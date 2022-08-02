/*
This SQL scripts creates and fills the calculate_invariant table. The calculate_invariant table will be used for storing information
specifically about the calculation of the invariants.
The fields in the table are:
	- calculate_invariant_id: Serial unique ID associated with the invariant calculation
	- grinvinname: Name of the invariant in the Grinvin application. TODO - May prove unnecessary
	- invariantlevel: Indication of how fast the invariant can be calculated
*/
CREATE TABLE calculate_invariant (
	calculate_invariant_id SERIAL PRIMARY KEY,
	grinvinname varchar(255) UNIQUE,
	invariantlevel integer
);

/* Information from the original invariant table is used to fill the calculate_invariant table. */
INSERT INTO calculate_invariant(grinvinname, invariantlevel)
SELECT grinvinname, invariantlevel
FROM t_invariant;

