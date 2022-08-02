#!/bin/bash

if [[ "$#" -ne 3 ]]; then
        echo "3 arguments are needed; the program name, the graph ID and the queue index"
        exit 1
fi

queues=("UltraQ" "FastQ" "MediumQ" "SlowQ")
program_name=$1
graph_id=$2
index=$3

job_file=$(jq .$program_name.job_file ./calculate_invariants/invariants.json | tr -d '"')
command="./calculate_invariants/$job_file $graph_id"

JOB_ID=$(sbatch --parsable --partition=${queues[$index]} -D ./calculate_invariants $command)
sbatch --partition=${queues[$index]} --dependency=afterany:$JOB_ID multiqueue.sh $JOB_ID $program_name $graph_id $((index+1))
