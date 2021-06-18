package com.damsak.rentcloud.profileservice.service;

import com.damsak.rentcloud.commons.model.customer.Customer;

import java.util.List;

public interface CustomerService {

    Customer save(Customer customer);

    Customer fetchCustomerById(int id);

    List<Customer> findAll();

}
