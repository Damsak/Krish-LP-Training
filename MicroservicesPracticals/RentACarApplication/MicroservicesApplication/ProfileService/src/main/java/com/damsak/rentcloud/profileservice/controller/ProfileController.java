package com.damsak.rentcloud.profileservice.controller;

import com.damsak.rentcloud.commons.model.Customer;
import com.damsak.rentcloud.profileservice.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/services")
public class ProfileController {

    @Autowired
    CustomerService customerService;

    //this customer model is coming from other project(which just contains the models). we have it as a dependency to this project
    @RequestMapping(value = "/profile", method = RequestMethod.POST)
    public Customer save(@RequestBody Customer customer){

        return customerService.save(customer);
    }
}
