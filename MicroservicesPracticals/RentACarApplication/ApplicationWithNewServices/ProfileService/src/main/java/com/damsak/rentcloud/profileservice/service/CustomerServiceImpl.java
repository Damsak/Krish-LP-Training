package com.damsak.rentcloud.profileservice.service;

import com.damsak.rentcloud.commons.model.customer.Customer;
import com.damsak.rentcloud.profileservice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer fetchCustomerById(int id){

        Optional<Customer> customer= customerRepository.findById(id);

        //now we need to check for the availability of the customer record
        if(customer.isPresent()){
            return customer.get();
        }
        return null;
    }

    public  List<Customer> findAll() { return  customerRepository.findAll();}

}
