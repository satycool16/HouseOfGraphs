#!/bin/bash

if [ "$#" -ne 1 ]
then
        echo "1 argument is needed; the graph ID"
        exit 1
fi

graph_id=$1

./add_job.sh acyclic $graph_id 0
./add_job.sh average_degree $graph_id 0
./add_job.sh bipartite $graph_id 0
./add_job.sh chromatic_number $graph_id 0
./add_job.sh clique_number $graph_id 0
./add_job.sh connected $graph_id 0
./add_job.sh diameter $graph_id 0
./add_job.sh edge_connectivity $graph_id 0
./add_job.sh girth $graph_id 0
./add_job.sh degrees $graph_id 0  # Calculates Maximum Degree, Minimum Degree and Regular
./add_job.sh matching_number $graph_id 0
./add_job.sh minimum_dominating_set $graph_id 0
./add_job.sh number_of_edges $graph_id 0
./add_job.sh number_of_vertices $graph_id 0
./add_job.sh radius $graph_id 0
./add_job.sh independence_number $graph_id 0
./add_job.sh algebraic_connectivity $graph_id 0
./add_job.sh chromatic_index $graph_id 0
./add_job.sh index $graph_id 0
./add_job.sh laplacian_largest_eigenvalue $graph_id 0
./add_job.sh second_largest_eigenvalue $graph_id 0
./add_job.sh smallest_eigenvalue $graph_id 0
./add_job.sh longest_induced_path $graph_id 0
./add_job.sh number_of_components $graph_id 0
./add_job.sh number_of_triangles $graph_id 0
./add_job.sh eulerian $graph_id 0
./add_job.sh hamiltonian $graph_id 0
./add_job.sh vertex_connectivity $graph_id 0
./add_job.sh longest_induced_cycle $graph_id 0
./add_job.sh genus $graph_id 0
./add_job.sh claw_free $graph_id 0
./add_job.sh density $graph_id 0
./add_job.sh circumference $graph_id 0
./add_job.sh planar $graph_id 0

