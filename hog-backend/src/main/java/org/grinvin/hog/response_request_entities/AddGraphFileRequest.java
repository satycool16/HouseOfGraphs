package org.grinvin.hog.response_request_entities;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

public class AddGraphFileRequest {
    private String graphName;
    private String graphInfo;
    private int userId;
    private List<Integer> interestingInvariants;

    private String fileFormat;

    public AddGraphFileRequest(){}

    public AddGraphFileRequest(String graphName, String graphInfo, int userId, List<Integer> interestingInvariants, String fileFormat) {
        this.graphName = graphName;
        this.graphInfo = graphInfo;
        this.userId = userId;
        this.interestingInvariants = interestingInvariants;
        this.fileFormat = fileFormat;
    }

    public String getGraphName() {
        return graphName;
    }

    public void setGraphName(String graphName) {
        this.graphName = graphName;
    }

    public String getGraphInfo() {
        return graphInfo;
    }

    public void setGraphInfo(String graphInfo) {
        this.graphInfo = graphInfo;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public List<Integer> getInterestingInvariants() {
        return interestingInvariants;
    }

    public void setInterestingInvariants(List<Integer> interestingInvariants) {
        this.interestingInvariants = interestingInvariants;
    }

    public String getFileFormat() {
        return fileFormat;
    }

    public void setFileFormat(String fileFormat) {
        this.fileFormat = fileFormat;
    }
}
