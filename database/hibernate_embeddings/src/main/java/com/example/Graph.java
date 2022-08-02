package com.example;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Arrays;


@Entity
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE, region = "graph")
public class Graph implements Serializable {

    private int id;
    @Transient
    private double[][] embedding;

    @Id
    @GeneratedValue
    public int getId() {
        return id;
    }

    void setId(int id) {
        this.id = id;
    }

    @Lob
    @Column(length = 1024)
    public double[][] getEmbedding() {
        return embedding;
    }

    public void setEmbedding(double[][] embedding) {
        this.embedding = embedding;
    }

    @Override
    public String toString(){
        return "" + id + ": " + Arrays.deepToString(embedding) + "\n";
    }
}
