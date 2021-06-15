package com.damsak.rentcloud.profileservice.controller;

import com.damsak.rentcloud.commons.model.Customer;
import com.damsak.rentcloud.profileservice.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;

import javax.annotation.security.RolesAllowed;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/services")
public class ProfileController {

    @Autowired
    CustomerService customerService;

    //this customer model is coming from other project(which just contains the models). we have it as a dependency to this project
    @RequestMapping(value = "/profile", method = RequestMethod.POST)
    @RolesAllowed("admin")
    public Customer save(@RequestBody Customer customer){

        return customerService.save(customer);
    }

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    @RolesAllowed("admin")
    public ResponseEntity<Customer> fetchCustomer(@RequestParam int id) {

        Customer customer= customerService.fetchCustomerById(id);

        if(customer == null) {
            return ResponseEntity.notFound().build(); //dont have a customer profile
        }else {
            return ResponseEntity.ok().body(customer); //have a customer profile
        }
    }

    @RequestMapping(value = "/allProfiles", method = RequestMethod.GET)
    @RolesAllowed("user")
    public List<Customer> findAll(){

        List<Customer> customers = customerService.findAll();
        return customerService.findAll();
    }

}
