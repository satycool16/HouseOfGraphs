package org.grinvin.hog.database.entity;

public record GraphInvariant(int graphId, int invariantId, int invariantStatus,
                             double invariantValue, boolean ofInterest) {
}
