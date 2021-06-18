package com.damsak.rentcloud.profileservice.repository;

import com.damsak.rentcloud.commons.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {

}
