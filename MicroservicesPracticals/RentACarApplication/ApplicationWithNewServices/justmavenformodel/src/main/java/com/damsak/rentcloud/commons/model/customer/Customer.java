package com.damsak.rentcloud.commons.model.customer;

import javax.persistence.*;
import java.util.List;

import lombok.Data;

//annotate as entity because this is the class that deals with db
@Entity
@Table(name = "customer")
@Data
public class Customer {

    //to make the id primary key and make it auto increment
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String firstName;
    String lastName;
    String dlNumber;
    String zipcode;

    @OneToMany(mappedBy = "customer")
    private List<Loyality> loyalities;

}
