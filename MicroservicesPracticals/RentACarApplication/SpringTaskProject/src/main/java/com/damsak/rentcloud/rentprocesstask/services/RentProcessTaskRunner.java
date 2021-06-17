package com.damsak.rentcloud.rentprocesstask.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class RentProcessTaskRunner implements CommandLineRunner {


    @Autowired
    RentProcessService rentProcessService;

    //Similar to main method
    @Override
    public void run(String... args) throws Exception {

        if(args.length>0) {

            if (rentProcessService.validateDL(args[0])) {
                System.out.println("valid driving license");
            } else {
                System.out.println("Invalid driving license");
            }
        } else {
            System.out.println("Running without arguments");
        }
    }
}
