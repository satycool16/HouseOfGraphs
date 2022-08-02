#include "graph6io.h"

#include <iostream>

/**
 * Reads a single graph from the given input stream and stores it as a list of neighbours
 * @param[in]  in       input stream
 * @param[out] graph    list of neighbours of all vertices, 0-based
 * @param[out] degrees  degrees of the vertices
 * @param[out] nv       number of vertices in te graph
 * @return 0 if end of file, 1 if OK, 2 if in error
 */
int readGraph6(std::istream &in, AdjacencyList &graph, DegreeList &degrees, int &nv) {
    int n;
    char c[3];
    int byte;
    do { /* skip newline(s) */
        if ((byte = in.get()) == EOF) {
            return (in.eof() ? 0 : 2);  // TODO always 0?
        }
    } while (byte < 63 || byte > 126);
    if (byte == 126) {
        if (in.read (c, 3).gcount() < 3) {
            return (2);
        }
        n = ((unsigned int) c[0] - 63) * 4096 + ((unsigned int) c[1] - 63) * 64 + ((unsigned int) c[2] - 63);
    } else {
        n = byte - 63;
    }

    if (n > MAXN) {
        return 2;
    }
    nv = n;

    unsigned int i, j;
    for (i = 0; i < n; i++) {
        degrees[i] = 0;
    }
    byte = 0;

    unsigned int k = 0;
    for (j = 1; j < n; j++) {
        for (i = 0; i < j; i++) {
            if (k == 0) {
                if ((byte = in.get()) == EOF) {
                    return (2);
                }
                byte -= 63;
                k = 32;
            }
            if (byte & k) {
                graph[i][degrees[i]] = j;
                graph[j][degrees[j]] = i;
                degrees[i]++;
                degrees[j]++;
            }
            k = k >> 1;
        }
    }
    return (1);
}
