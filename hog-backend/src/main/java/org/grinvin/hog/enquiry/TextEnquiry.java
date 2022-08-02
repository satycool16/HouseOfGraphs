package org.grinvin.hog.enquiry;

public class TextEnquiry implements Enquiry {
    private String searchString;

    public TextEnquiry(){}

    public TextEnquiry(String searchText){
        this.searchString = searchText;
    }

    public String getSearchString() {
        return searchString;
    }

    public String getSQLSearchString(){
        return searchString.replace('*', '%').toLowerCase();
    }
}
