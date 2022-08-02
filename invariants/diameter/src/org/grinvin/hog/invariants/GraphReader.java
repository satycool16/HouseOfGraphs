package org.grinvin.hog.invariants;

import java.io.BufferedReader;
import java.io.IOException;

public class GraphReader {

    private boolean[] readLine (BufferedReader reader) throws IOException {
        String line = reader.readLine();
        if (line == null || line.isBlank()) {
            return null;
        } else {
            String[] split = line.split("\\s+");
            int len = split.length;
            boolean[] result = new boolean[len];
            for (int i = 0; i < len; i++) {
                result[i] = ! "0".equals(split[i]);
            }
            return result;
        }
    }

    public boolean[][] adjacencyMatrix (BufferedReader reader) throws IOException {
        boolean[] row = readLine (reader);
        if (row == null) {
            return null;
        }
        int order = row.length;
        boolean[][] result = new boolean[order][];
        result[0] = row;
        for (int i=1; i < order; i++) {
            result[i] = readLine (reader);
            if (result[i] == null) {
                return null;
            }
        }
        return result;
    }
}
