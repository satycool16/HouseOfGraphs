#!/bin/bash
# Basic test script to check if copying the data from the old database to the new database scheme was successful.
# Executes some tests on the graph_invariant table of the database.
if [ "$#" -ne 2 ]
then
	echo "2 arguments are needed; the old database name and the new database name"
	exit 1
fi

olddb=$1
newdb=$2

# Test 1: Test if the old and new database have an equal number of graph_invariant(values).
cnt1=$(psql $PSQLOPTS $olddb -tAc "SELECT COUNT(*) FROM graph_invariantvalues;")
cnt2=$(psql $PSQLOPTS $newdb  -tAc "SELECT COUNT(*) FROM graph_invariant;")

if [ "$cnt1" != "$cnt2" ]
then
	echo "FAIL: Different number of graph_invariant(values) in table."
	exit 1
else
	echo "PASS: New database has the same number of graph_invariant(values) as previously."
fi

# Test 2: Test if each graph has the correct number of interesting invariant values. (This check takes a very long time to execute!)
if [[ "$execute_long_tests" == 1 ]]
then
	graph_ids=$(psql $PSQLOPTS $olddb -tAc "SELECT id from graph;")

	for graph_id in $graph_ids
	do
		res1=$(psql $PSQLOPTS $olddb -tAc "SELECT count(*) FROM graph_invariant WHERE graph_id=${graph_id};")
		res2=$(psql $PSQLOPTS $newdb -tAc "SELECT count(*) FROM graph_invariant WHERE graph_id=${graph_id} AND ofinterest=TRUE;")

		if [[ "$res1" != "$res2" ]]
		then
			echo "FAIL: Making interesting invariants a field in graph_invariant went wrong."
			exit 1
		fi
	done
	echo "PASS: Making interesting invariants a field in graph_invariant works as expected."
fi

