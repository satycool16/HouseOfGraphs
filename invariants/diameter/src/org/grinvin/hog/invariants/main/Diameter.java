package org.grinvin.hog.invariants.main;

import org.grinvin.hog.invariants.GraphReader;
import org.grinvin.hog.invariants.Invariants;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

public class Diameter {

    public static void main(String[] args) {
        try (InputStreamReader stream = new InputStreamReader(System.in, StandardCharsets.UTF_8);
                BufferedReader reader = new BufferedReader(stream)) {
            double result = new Invariants().diameter(new GraphReader().adjacencyMatrix(reader));
            if (Double.isNaN(result) || Double.isInfinite(result)) {
                System.out.println(result);
            } else {
                System.out.println((int)result);
            }

        } catch (IOException ex) {
            System.out.println(); // empty line when in error
        }
    }
}
