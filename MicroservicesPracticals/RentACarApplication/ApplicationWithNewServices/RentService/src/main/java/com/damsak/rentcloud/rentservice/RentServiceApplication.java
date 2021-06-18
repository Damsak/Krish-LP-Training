package com.damsak.rentcloud.rentservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.damsak.rentcloud.commons.model.rent")
public class RentServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(RentServiceApplication.class, args);
    }

}
