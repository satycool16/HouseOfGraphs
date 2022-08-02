#!/bin/bash

#SBATCH --job-name="chromatic_number"
#SBATCH -o %j.out
#SBATCH -e %j.err

if [ "$#" -ne 1 ]
then
        echo "1 argument is needed; the graph ID"
        exit 1
fi

graph_id=$1
program_name="chromatic_number"
input_format=$(jq .$program_name.input_format ./invariants.json | tr -d '"')

# executable
./pre_process.sh "$graph_id" "$program_name"
/opt/jdk-17/bin/java -jar ../grinvin-legacy/grinvin-legacy.jar org.grinvin.invariants.ChromaticNumber <  ../temp/graph_$graph_id.$input_format
./post_process.sh "$graph_id" "$program_name" "$SLURM_JOBID"

