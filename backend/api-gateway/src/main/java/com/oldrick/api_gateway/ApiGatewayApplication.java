package com.oldrick.api_gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class ApiGatewayApplication {

    private static final Logger logger = LoggerFactory.getLogger(ApiGatewayApplication.class);

    public static void main(String[] args) {
        System.out.println("URI TO PROJECT SERVICE _---------> " + System.getenv("URI_PROJECTS_SERVICE"));//URI_PROJECTS_SERVICE
        SpringApplication.run(ApiGatewayApplication.class, args);

    }
}

