#!/bin/bash
# Script that executes all database tests constructed in './tests'.

PSQLOPTS="-U postgres"

if [ "$#" -ne 3 ]
then
	echo "3 arguments are needed; the old database name, the new database name and a boolean (0/1) to indicate whether tests with long duration should be included"
	exit 1
fi

olddb=$1
newdb=$2
execute_long_tests=$3

export PSQLOPTS
export execute_long_tests

echo "Users + activation"
echo "------------------------------------"
./tests/users+activation.sh $olddb $newdb 

echo ""
echo "Comment"
echo "------------------------------------"
./tests/comment.sh $olddb $newdb 

echo ""
echo "Graph + embedding"
echo "------------------------------------"
./tests/graph+embedding.sh $olddb $newdb 

echo ""
echo "Invariant + calculate_invariant"
echo "------------------------------------"
./tests/invariant+calculate_invariant.sh $olddb $newdb 

echo ""
echo "Graph_invariant"
echo "------------------------------------"
./tests/graph_invariant.sh $olddb $newdb


