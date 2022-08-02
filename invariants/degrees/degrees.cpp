#include "graph_config.h"
#include "graph6io.h"

#include <iostream>

int main() {
    DegreeList degrees;
    AdjacencyList list;
    int order;
    int result;

    while ((result = readGraph6(std::cin, list, degrees, order)) != 0) {
        if (result != 2) {
            unsigned int min = order;
            unsigned int max = 0;
            for (int i=0; i < order; i++) {
                if (degrees[i] < min) {
                    min = degrees[i];
                }
                if (degrees[i] > max) {
                    max = degrees[i];
                }
            }
            if (min == order) {
                // empty graph, no result
            } else {
                std::cout << min << " " << max << " "
                        << (min == max ? "true" : "false");
            }
        }
        std::cout << std::endl;
    }
}
