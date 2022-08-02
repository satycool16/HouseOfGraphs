#!/bin/bash

if [ "$#" -ne 2 ]
then
        echo "2 argument are needed; the graph ID and the program name"
        exit 1
fi

username="hoguser"
password="admin"
PSQLOPTS="-U $username -h localhost"

graph_id=$1
program_name=$2
invariant_ids=($(jq .$program_name.invariant_ids ./invariants.json | tr -d '"'))

# update invariantstatus to COMPUTING (invariantstatus=1)
for invariant_id in "${invariant_ids[@]}"
do
    PGPASSWORD=$password psql $PSQLOPTS -d new_hogdb -c "UPDATE graph_invariant SET invariantstatus=1 WHERE graph_id=$graph_id AND invariant_id=$invariant_id;" > /dev/null 2>&1
done

