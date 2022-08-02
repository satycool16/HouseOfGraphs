#!/bin/bash

#SBATCH --job-name="multi"
#SBATCH -o %j.out
#SBATCH -e %j.err

if [[ "$#" -ne 4 ]]; then
        echo "4 arguments are needed; the Slurm job ID, the program name, the graph ID and the queue index"
        exit 1
fi

queues=("UltraQ" "FastQ" "MediumQ" "SlowQ")
job_id=$1
program_name=$2
graph_id=$3
index=$4

error=$(head -n 1 ./calculate_invariants/$job_id.err)
rm ./calculate_invariants/$job_id.err ./calculate_invariants/$job_id.out

# executable
pattern="^.*CANCELLED AT .* DUE TO TIME LIMIT.*$"
if [[ "$error" =~ $pattern ]]; then
    if [[ ${queues[$index]} != "" ]]; then
        ./add_job.sh $program_name $graph_id $index
    else
       username="hoguser"
       password="admin"
       PSQLOPTS="-U $username -h localhost"
       invariant_ids=($(jq .$program_name.invariant_ids ./calculate_invariants/invariants.json | tr -d '"'))
       nr_of_invariants=$(jq .$program_name.nr_of_invariants ./calculate_invariants/invariants.json)
       while [[ $i -lt $nr_of_invariants ]]
       do
           PGPASSWORD=$password psql $PSQLOPTS -d new_hogdb -c "UPDATE graph_invariant SET invariantstatus=3 WHERE graph_id=$graph_id AND invariant_id=${invariant_ids[$i]};" > /dev/null 2>&1
           ((i++))
       done
       echo "CALCULATION FAILED!"
    fi
else
    echo "CALCULATION FINISHED"
fi
rm $SLURM_JOB_ID.err $SLURM_JOB_ID.out
