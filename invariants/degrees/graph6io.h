//
// Created by kc on 7/01/22.
//

#ifndef CPP_GRAPH6IO_HPP
#define CPP_GRAPH6IO_HPP

#include "graph_config.h"

/**
 * Reads a single graph from the given input stream and stores it as a list of neighbours
 * @param[in]  in       input stream
 * @param[out] graph    list of neighbours of all vertices, 0-based
 * @param[out] degrees  degrees of the vertices
 * @param[out] nv       number of vertices in te graph
 * @return 0 if end of file, 1 if OK, 2 if in error
 */
int readGraph6(std::istream &in, AdjacencyList &graph, DegreeList &degrees, int &nv);

#endif //CPP_GRAPH6IO_HPP
