package org.grinvin.hog.database.dao;

import org.grinvin.hog.database.entity.Invariant;

import java.util.List;

public interface InvariantDAO {
    int countInvariants();
    List<Integer> getAllInvariantIds();
    List<Invariant> getAllInvariants();
    Invariant getInvariantById(int invariantId);
    Invariant getInvariantByKeyword(String keyword);
    int createInvariant(String definition, String keyword, String invariantName, String typename, String grinvinName, int invariantLevel);
    void deleteInvariant(int invariantId);
}
