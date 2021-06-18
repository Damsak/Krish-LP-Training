package com.damsak.rentcloud.vehicleservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EntityScan(basePackages = "com.damsak.rentcloud.commons.model.vehicle")
@EnableEurekaClient
public class VehicleServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(VehicleServiceApplication.class, args);
    }

}
