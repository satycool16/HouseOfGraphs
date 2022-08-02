package org.grinvin.hog.database.entity;

public record Invariant(int invariantId, int calculateInvariantId,
                        String definition, String keyword,
                        String invariantName, String typeName) {
}
