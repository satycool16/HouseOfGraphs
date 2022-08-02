/* Graph6Utils.java
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

import org.grinvin.hog.util.InputFormatException;
import org.grinvin.hog.util.OutputFormatException;

import java.util.ArrayList;
import java.util.List;

/**
 * Utility functions for handling graph 6 strings.
 *
 * Specification of graph6 format:
 *
 * This code is in ascii.
 *
 * General principles:
 *
 * All numbers in this description are in decimal unless obviously in binary.
 *
 * Apart from the header, there is one object per line. Apart from the header
 * and the end-of-line characters, all bytes have a value in the range 63-126
 * (which are all printable ASCII characters). A file of objects is a text file,
 * so whatever end-of-line convention is locally used is fine).
 *
 * Bit vectors:
 *
 * A bit vector x of length k can be represented as follows. Example:
 * 1000101100011100
 *
 * (1) Pad on the right with 0 to make the length a multiple of 6. Example:
 * 100010110001110000
 *
 * (2) Split into groups of 6 bits each. Example: 100010 110001 110000
 *
 * (3) Add 63 to each group, considering them as bigendian binary numbers.
 * Example: 97 112 111
 *
 * These values are then stored one per byte. So, the number of bytes is
 * ceiling(k/6).
 *
 * Let R(x) denote this representation of x as a string of bytes.
 *
 * Small nonnegative integers:
 *
 * Let n be an integer in the range 0-68719476735 (2^36-1).
 *
 * If 0 &lt;= n &lt;= 62, define N(n) to be the single byte n+63. If 63 &lt;= n
 * &lt;= 258047, define N(n) to be the four bytes 126 R(x), where x is the
 * bigendian 18-bit binary form of n. If 258048 &lt;= n &lt;= 68719476735,
 * define N(n) to be the eight bytes 126 126 R(x), where x is the bigendian
 * 36-bit binary form of n.
 *
 * Examples: N(30) = 93 N(12345) = N(000011 000000 111001) = 126 69 63 120
 * N(460175067) = N(000000 011011 011011 011011 011011 011011) = 126 126 63 90
 * 90 90 90 90
 *
 *
 * Description of graph6 format. ----------------------------
 *
 * Data type: simple undirected graphs of order 0 to 68719476735.
 *
 * Optional Header: &gt;&gt;graph6&lt;&lt; (without end of line!)
 *
 * File name extension: .g6
 *
 * One graph: Suppose G has n vertices. Write the upper triangle of the
 * adjacency matrix of G as a bit vector x of length n(n-1)/2, using the
 * ordering (0,1),(0,2),(1,2),(0,3),(1,3),(2,3),...,(n-1,n).
 *
 * Then the graph is represented as N(n) R(x).
 *
 * Example: Suppose n=5 and G has edges 0-2, 0-4, 1-3 and 3-4.
 *
 * x = 0 10 010 1001
 *
 * Then N(n) = 68 and R(x) = R(010010 100100) = 81 99. So, the graph is 68 81
 * 99.
 *
 */
public class AdjacencyMatrix {

    /*
     * Encodes a given graph in graph6 format. @param adj Adjacency matrix of
     * the graph. True means connected.
     */
    public static byte[] encode(boolean[][] adj) {
        int numberOfVertices = adj.length;
        List<Byte> code = new ArrayList<Byte>();

        // encode number of vertices
        if (numberOfVertices <= 62) {
            code.add((byte) (numberOfVertices + 63));
        } else if (numberOfVertices <= 258047) {
            code.add((byte) 126);
            code.add((byte) (numberOfVertices / 4096 + 63));
            code.add((byte) ((numberOfVertices % 4096) / 64 + 63));
            code.add((byte) (numberOfVertices % 64 + 63));
        } else {
            throw new OutputFormatException("Too many vertices: " + numberOfVertices + " (> 258047)");
        }

        // Encode adjacencies
        int k = 32;
        byte temp = 0;
        for (int j = 1; j < numberOfVertices; j++) {
            for (int i = 0; i < j; i++) {
                if (adj[i][j]) {
                    temp |= k;
                }
                k = k >> 1;
                if (k == 0) {
                    temp += 63;
                    code.add(temp);
                    k = 32;
                    temp = 0;
                }
            }
        }
        if (k != 32) {
            temp += 63;
            code.add(temp);
        }

        // convert list of bytes to array
        byte codeArray[] = new byte[code.size()];
        for (int i = 0; i < code.size(); i++) {
            codeArray[i] = code.get(i);
        }
        return codeArray;
    }

    private static final String G6_HEADER = ">>graph6<<";

    /**
     * Convert a graph6 byte array to an adjacency matrix. Returns the adjacency
     * matrix of the resulting graph. True means connected.
     *
     * @throws IllegalArgumentException if not in the correct format
     */
    public static boolean[][] decode(byte[] code) {

        int currentIndex;
        if (code[0] == '>') {
            for (int i = 0; i < G6_HEADER.length(); i++) {
                if (code[i] != (byte) G6_HEADER.charAt(i)) {
                    throw new InputFormatException("Incorrect graph6 header");
                }
            }
            currentIndex = G6_HEADER.length();
        } else {
            currentIndex = 0;
        }

        // check validity of the code
        for (int i = currentIndex; i < code.length; i++) {
            if (code[i] < 63 || code[i] > 126) {
                throw new InputFormatException("Non-printable character in graph6 body");
            }
        }

        // decode
        int numberOfVertices;
        if (code[currentIndex] == 126) {
            assert code.length > 4;
            if (code[currentIndex + 1] == 126) {
                throw new InputFormatException("Too many vertices for graph6 file (> 258047)");
            }
            numberOfVertices = (code[currentIndex + 1] - 63) * 4096 + (code[currentIndex + 2] - 63) * 64 + (code[currentIndex + 3] - 63);
            currentIndex += 4;
        } else {
            numberOfVertices = code[currentIndex] - 63;
            currentIndex += 1;
        }

        boolean[][] adj = new boolean[numberOfVertices][numberOfVertices];
        int index0 = 0;
        int index1 = 1;
        for (int i = currentIndex; i < code.length; i++) {
            byte number = (byte) (code[i] - 63);
            for (byte k = 1 << 5; k >= 1; k >>= 1) {
                if ((number & k) > 0) {
                    adj[index0][index1] = true;
                    adj[index1][index0] = true;
                    // TODO: could abort earlier (but doesn't matter since decoding isn't the bottleneck)
                }
                index0++;
                if (index0 == index1) {
                    index1++;
                    index0 = 0;
                }
            }
        }
        return adj;
    }

    private static final int MAX_STRING_LENGTH = 30;

    /**
     * Converts the code to a String. Truncates the result if it's too long.
     */
    public static String toString(byte[] graph6code) {
        StringBuilder builder = new StringBuilder(MAX_STRING_LENGTH + 3);
        for (int i = 0; i < graph6code.length && i < MAX_STRING_LENGTH; i++) {
            builder.append((char) graph6code[i]);
        }
        if (graph6code.length > MAX_STRING_LENGTH) {
            builder.append("...");
        }
        return builder.toString();

    }
}
