#!/bin/bash
# Basic test script to check if copying the data from the old database to the new database scheme was successful.
# Executes some tests on the graph and embedding table of the database.
if [ "$#" -ne 2 ]
then
	echo "2 arguments are needed; the old database name and the new database name"
	exit 1
fi

olddb=$1
newdb=$2

# Test 1: Test if the old and new database have an equal number of graphs.
cnt1=$(psql $PSQLOPTS $olddb -tAc "SELECT COUNT(*) FROM graph;")
cnt2=$(psql $PSQLOPTS $newdb -tAc "SELECT COUNT(*) FROM graph;")

if [ "$cnt1" != "$cnt2" ]
then
	echo "FAIL: Different number of graphs in table."
	exit 1
else
	echo "PASS: New database has the same number of graphs as previously."
fi

# Test 2: Test if the embedding table has the same number of entries as there are graphs in the old database.
cnt3=$(psql $PSQLOPTS $newdb  -tAc "SELECT COUNT(*) FROM embedding;")

if [ "$cnt1" != "$cnt3" ]
then
        echo "FAIL: The number of entries in the graph and embedding table differs."
        exit 1
else
        echo "PASS: The number of entries in the graph and embedding table is equal."
fi

# Test 3: Test if adding a new graph creates a graph with the correct ID (bigger than maximum ID in the previous table).
max_graph_id=$(psql $PSQLOPTS $olddb -tAc "SELECT MAX(id) FROM graph;")

psql $PSQLOPTS $newdb -c "INSERT INTO graph(canonicalform, graphname, user_id, upload_id) VALUES ('01101001', 'test_graph', '25', 1256);" > /dev/null 2>&1

new_graph_id=$(psql $PSQLOPTS $newdb -tAc "SELECT graph_id FROM graph WHERE graphname='test_graph';")

psql $PSQLOPTS $newdb -c "DELETE FROM graph WHERE graphname='test_graph';" > /dev/null 2>&1

if [ $((new_graph_id - max_graph_id)) -gt 0  ]
then
	echo "PASS: Graph id sequence generator correctly updated."
else
	echo "FAIL: Graph id sequence generator incorrectly updated"
	exit 1;
fi




