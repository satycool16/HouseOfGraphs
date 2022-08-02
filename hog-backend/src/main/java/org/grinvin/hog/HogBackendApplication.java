package org.grinvin.hog;

import org.apache.tomcat.jni.Proc;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.concurrent.Executors;

@SpringBootApplication
public class HogBackendApplication {

    public static void main(String[] args) throws IOException, InterruptedException {
        SpringApplication.run(HogBackendApplication.class, args);
    }
}
