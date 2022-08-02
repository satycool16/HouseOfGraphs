package org.grinvin.hog.response_request_entities;

import org.grinvin.hog.enquiry.SearchConditions;

public class DownloadRequest {
    private int graphId;
    private String format;

    private SearchConditions searchConditions;

    public DownloadRequest(){}

    public DownloadRequest(int graphId, String format, SearchConditions searchConditions) {
        this.graphId = graphId;
        this.format = format;
        this.searchConditions = searchConditions;
    }

    public int getGraphId() {
        return graphId;
    }

    public void setGraphId(int graphId) {
        this.graphId = graphId;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public SearchConditions getSearchConditions() {
        return searchConditions;
    }

    public void setSearchConditions(SearchConditions searchConditions) {
        this.searchConditions = searchConditions;
    }
}
