/* Embedder.java
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Copyright (C) 2010 Universiteit Gent
 * 
 * House of Graphs: an online database of 'interesting' graphs
 * 
 * Authors:
 *    Kris.Coolsaet@UGent.be
 *    Jan.Goedgebeur@UGent.be
 * In collaboration with:
 *    Hadrien.Melot@UMons.ac.be
 *    Gunnar.Brinkmann@UGent.be
 */

package org.grinvin.hog.util.graph;

import java.util.Random;

/**
 * Computes an embedding for a given graph.
 */
public class Embedder {
    // Code 'borrowed' from Grinvin

    //
    private static final double EDGE_LENGTH = 0.6;
    //

    private static final double NONEDGE_LENGTH = 3 * EDGE_LENGTH;
    //

    private static final double FORCE = 0.03;
    //

    private static final double FRICTION = 0.85;

    // adjacency matrix
    private boolean[][] adj;

    // embedding
    private double[][] embedding;

    //
    private double adjust;

    //
    private double[][] velocities;

    /**
     * Set the adjacency matrix for which to compute the embedding
     */
    public void setAdjacencyMatrix(boolean[][] adj) {
        this.adj = adj;
        int order = adj.length;
        adjust = 1.0;
        embedding = new double[order][2];
        velocities = new double[order][2];
    }

    //
    private static final int MAX_TRIES = 100;

    //
    private static final double DELTA_BOUND = 0.05;

    /**
     * Compute the embedding.
     */
    public void computeEmbedding() {
        initCoordinates();
        
        int count = 0;
        double delta = adjustCoordinates();
        while (count < MAX_TRIES && delta > DELTA_BOUND) {
            count++;
            adjustCoordinates();
        }
        
    }

    /**
     * Return the computed embedding
     */
    public double[][] getEmbedding() {
        return embedding;
    }

    static final private Random RG = new Random (5249879875039280L);

    /**
     * Initializes coordinates by distributing all vertices evenly around
     * the unit circle and disturbing them a little bit randomly.
     */
    private void initCoordinates() {
        int order = embedding.length;
        for (int i = 0; i < order; i++) {
            embedding[i][0] = Math.cos(Math.PI * 2 * i/ order) + RG.nextDouble()*0.1 - 0.05;
            embedding[i][1] = Math.sin(Math.PI * 2 * i/ order) + RG.nextDouble()*0.1 - 0.05;
        }
    }

    /**
     * Performs a single adjustment of the coordinates. Returns a measure of
     * how much the embedding was changed.
     */
    private double adjustCoordinates() {
        int n = embedding.length;
        if (n == 0) {
            return 0.0;
        }

        // adjust velocities according to forces
        for (int i = 0; i < n; i++) {
            double[] coord1 = embedding[i];
            double x = coord1[0];
            double y = coord1[1];
            for (int j = i + 1; j < n; j++) {
                double[] coord2 = embedding[j];
                double dx = coord2[0] - x;
                double dy = coord2[1] - y;
                double dist = Math.hypot(dx, dy);

                dist /= adjust;

                if (dist == 0) {
                    dx = 1.0;
                    dy = 0.0;
                } else {
                    dx /= dist;
                    dy /= dist;
                }
                if (adj[i][j]) {
                    dist = (dist - EDGE_LENGTH) / EDGE_LENGTH;
                } else {
                    dist = (dist - NONEDGE_LENGTH) / EDGE_LENGTH;
                }

                // force proportional to distance from equilibrium
                dx = dx * dist * adjust * FORCE;
                dy = dy * dist * adjust * FORCE;
                velocities[j][0] -= dx;
                velocities[j][1] -= dy;
                velocities[i][0] += dx;
                velocities[i][1] += dy;
            }
        }

        // dampen velocities
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < 2; j++) {
                velocities[i][j] *= FRICTION;
            }
        }

        // determine vertex bounds
        double[] min = embedding[0].clone();
        double[] max = embedding[0].clone();

        for (int i = 1; i < n; i++) {
            double[] coords = embedding[i];
            for (int j = 0; j < 2; j++) {
                if (coords[j] < min[j]) {
                    min[j] = coords[j];
                } else if (coords[j] > max[j]) {
                    max[j] = coords[j];
                }
            }
        }

        // compute shift towards the center
        double[] offset = new double[2];
        for (int j = 0; j < 2; j++) {
            double offs = (min[j] + max[j]) / 2;
            if (offs < -0.02 || offs > 0.02) {
                offset[j] = 0.25 * offs;
            } else {
                offset[j] = offs;
            }
        }

        // adjust potentials
        double size = Math.max(max[1] - min[1], max[0] - min[0]);
        if (size > 0.0) {
            size = 2.0 / size;
            if (size < 0.95 || size > 1.15) {
                size = Math.pow(size, 0.25);
            }
            this.adjust = this.adjust * size; // PMD must see that this is an assignment
        } else {
            size = 1.0;
        }

        // apply velocities, perform shift and scale
        double delta = 0.0;
        for (int index = 0; index < embedding.length; index++) {
            double[] coords = embedding[index];
            for (int j = 0; j < 2; j++) {
                double newcoord = size * (coords[j] - offset[j] + velocities[index][j]);
                delta += Math.abs(coords[j] - newcoord);
                coords[j] = newcoord;
            }
        }
        return delta;
    }
}
