package com.damsak.rentcloud.profileservice.controller;

import com.damsak.rentcloud.commons.model.customer.Customer;
import com.damsak.rentcloud.profileservice.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping(value = "/services/customers")
public class ProfileController {

    @Autowired
    CustomerService customerService;

    @PostMapping
    public Customer save(@RequestBody Customer customer) {
        return customerService.save(customer);
    }

    @GetMapping(value = "/{id}")
    public Customer getCustomer(@PathVariable int id) {
        System.out.println("request came on " + LocalDateTime.now() + " 2  !");
    return customerService.fetchCustomerById(id);
    }

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.findAll();
    }


}
