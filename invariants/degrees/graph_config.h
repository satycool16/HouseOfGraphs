/**
 * Some parameters used by all files in this project
 */

#ifndef GRAPH_CONFIG_H
#define GRAPH_CONFIG_H

#include <array>

const unsigned int MAXN = 300; // upper limit for the number of vertices in the graphs considered

/**
 * Do not change anything below
 */

typedef std::array<std::array<unsigned int,MAXN>,MAXN> AdjacencyList;    // list of neighbours
typedef std::array<unsigned int, MAXN> DegreeList;

#endif //GRAPH_CONFIG_H
