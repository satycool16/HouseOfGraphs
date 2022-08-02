/* AdjacencyMatrixFormat.java
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

package org.grinvin.hog.util.io;

import org.grinvin.hog.util.InputFormatException;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

import static org.grinvin.hog.util.graph.AdjacencyMatrix.decode;

/**
 * Supports adjacency matrix format. An adjacency matrix is represented by one line
 * for each row, where row elements are either 0 or 1, optionally separated by spaces.
 * 
 * Subsequent adjacency matrices in the same file are separated by blank lines and/or comments.
 * Any line that start with a semi-colon or a hash-sign (#) is considered a comment.
 */
public class AdjacencyMatrixFormat implements Format{

    @Override
    public boolean supportsInput() {
        return true; // TODO
    }

    @Override
    public boolean supportsOutput() {
        return true;
    }

    @Override
    public boolean supportsExtensiveOutput() {
        return false;
    }

    @Override
    public String getDisplayName() {
        return "Adjacency matrix";
    }

    @Override
    public String getFileExtension() {
        return "mat";
    }

    class InStream extends GraphInputStream {

        public InStream(InputStream stream) {
            super(stream);
        }

        @Override
        public boolean[][] readGraph() throws IOException {
            byte[] line = readLine();
            int nrOfVertices = new String(line, StandardCharsets.UTF_8).split("\\s+").length;
            boolean[][] adjacency = new boolean[nrOfVertices][nrOfVertices];
            int rowIndex = 0;
            while(line != null && line.length != 0){
                String[] row = new String(line, StandardCharsets.UTF_8).split("\\s+");
                System.out.println(Arrays.toString(row));
                if(row.length != nrOfVertices){
                    throw new InputFormatException("There are rows of different lengths in the adjacency matrix.");
                }
                for(int i = 0; i < row.length; i++){
                    if(!row[i].equals("0") && !row[i].equals("1")){
                        throw new InputFormatException("Some entries in the adjacency matrix are not 0 or 1.");
                    }
                    adjacency[rowIndex][i] = row[i].equals("1");
                }
                line = readLine();
                rowIndex++;
            }
            if(rowIndex != nrOfVertices){
                throw new InputFormatException("The adjacency matrix isn't a square matrix.");
            }
            return adjacency;
        }
    }

    class OutStream extends GraphOutputStream {

        public OutStream(OutputStream os) {
            super(os);
        }

        @Override
        public void writeGraph(boolean[][] adjacencyMatrix) throws IOException {
            int n = adjacencyMatrix.length;
            for (boolean [] row : adjacencyMatrix) {
                write (row[0] ? '1' : '0');
                for (int i=1; i < n; i++) {
                    write (' ');
                    write (row[i] ? '1' : '0');
                }
                writeLine();
            }
            writeLine();
        }
        
    }

    @Override
    public GraphInputStream getInputStream(InputStream in) throws UnsupportedOperationException, IOException {
        return new InStream(in);
    }
    
    @Override
    public GraphOutputStream getOutputStream(OutputStream out) throws UnsupportedOperationException, IOException {
        return new OutStream (out);
    }
    
}
