#!/bin/bash

if [ "$#" -ne 3 ]
then
        echo "3 argument are needed; the graph ID, the program name and the SLURM job ID"
        exit 1
fi

username="hoguser"
password="admin"
PSQLOPTS="-U $username -h localhost"

graph_id=$1
program_name=$2
job_id=$3
invariant_ids=($(jq .$program_name.invariant_ids ./invariants.json | tr -d '"'))
pattern=$(jq .$program_name.pattern ./invariants.json)
pattern=$(sed 's/\\\\/\\/g' <<< $pattern | tr -d '"')
nr_of_invariants=$(jq .$program_name.nr_of_invariants ./invariants.json)

output=$(head -n 1 $job_id.out)
./parse_output.sh "$output" "$pattern" "$nr_of_invariants"

# update invariantstatus to COMPUTED (invariantstatus=2) and invariantvalue to parsed double
if [[ $? -eq 0 ]]; then
    doubles=($(sed -n 2p $job_id.out))
    i=0
    while [[ $i -lt $nr_of_invariants ]]
    do
        PGPASSWORD=$password psql $PSQLOPTS -d new_hogdb -c "UPDATE graph_invariant SET invariantstatus=2, invariantvalue=${doubles[$i]} WHERE graph_id=$graph_id AND invariant_id=${invariant_ids[$i]};" > /dev/null 2>&1
        ((i++))
    done
else
   exit 1
fi

