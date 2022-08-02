package org.grinvin.hog.enquiry;

import java.nio.charset.StandardCharsets;

public class CanonicalFormEnquiry implements Enquiry {
    private String canonicalForm;

    public CanonicalFormEnquiry(){}

    public CanonicalFormEnquiry(String canonicalForm){
        this.canonicalForm = canonicalForm;
    }

    public String getCanonicalForm() {
        return canonicalForm;
    }

    public byte[] getCanonicalFormByteArray() {
        return canonicalForm.getBytes();
    }
}
