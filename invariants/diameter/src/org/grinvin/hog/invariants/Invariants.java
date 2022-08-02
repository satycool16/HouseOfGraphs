package org.grinvin.hog.invariants;

public class Invariants {

    public int[][] distanceMatrix(boolean[][] mat) {
        int n = mat == null ? 0 : mat.length;
        int[][] dist = new int[n][n];

        // first step: adjacency
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dist[i][j] = mat[i][j] ? 1 : 0;
            }
        }

        int d = 1;
        int count;
        do {
            int d1 = d++;
            count = 0;
            for (int i = 0; i < n; i++) {
                for (int j = i + 1; j < n; j++) {
                    if (dist[i][j] == 0) {
                        for (int k = 0; k < n; k++) {
                            if (dist[i][k] == 1 && dist[j][k] == d1) {
                                dist[i][j] = d;
                                dist[j][i] = d;
                                count++;
                                break; // Oops :-)
                            }
                        }
                    }
                }
            }
        } while (count > 0);
        return dist;
    }

    public int[] eccentricityList(boolean[][] mat) {
        int[][] distanceMatrix = distanceMatrix(mat);
        int n = distanceMatrix.length;
        if (n == 0) {
            return new int[0];
        } else if (n == 1) {
            return new int[]{0};
        }
        int[] ecc = new int[n];
        for (int i = 0; i < n; i++) {
            int eccentricity = 0;
            for (int j = 0; j < n; j++) {
                int d = distanceMatrix[i][j];
                if (d == 0 && i != j) {
                    eccentricity = Integer.MAX_VALUE;
                }
                if (d > eccentricity) {
                    eccentricity = d;
                }
            }
            ecc[i] = eccentricity;
        }
        return ecc;
    }

    public double diameter(boolean[][] mat) {
        int[] eccentricityList = eccentricityList(mat);

        int n = eccentricityList.length;
        if (n == 0) {
            return Double.NaN;
        } else if (n == 1) {
            return 0.0;
        }
        int diam = 0;
        for (int eccentricity : eccentricityList) {
            if (eccentricity > diam) {
                diam = eccentricity;
            }
        }
        if (diam == Integer.MAX_VALUE) {
            return Double.POSITIVE_INFINITY;
        } else {
            return diam;
        }
    }

}
