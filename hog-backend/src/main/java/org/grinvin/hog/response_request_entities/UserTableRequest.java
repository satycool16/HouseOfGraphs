package org.grinvin.hog.response_request_entities;

import org.grinvin.hog.database.entity.User;

import java.util.List;

public class UserTableRequest {
    private int page;
    private int size;
    private String sort;
    private String sortDir;
    private List<TableFilter> filters;


    public UserTableRequest(){}

    public UserTableRequest(int page, int size, String sort, String sortDir, List<TableFilter> filters) {
        this.page = page;
        this.size = size;
        this.sort = sort;
        this.sortDir = sortDir;
        this.filters = filters;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public String getSortDir() {
        return sortDir;
    }

    public void setSortDir(String sortDir) {
        this.sortDir = sortDir;
    }

    public List<TableFilter> getFilters() {
        return filters;
    }

    public void setFilters(List<TableFilter> filters) {
        this.filters = filters;
    }
}
