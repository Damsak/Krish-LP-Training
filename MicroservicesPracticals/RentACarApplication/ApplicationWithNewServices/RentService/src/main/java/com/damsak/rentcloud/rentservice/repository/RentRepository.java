package com.damsak.rentcloud.rentservice.repository;

import com.damsak.rentcloud.commons.model.rent.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepository extends JpaRepository<Rent,Integer> {
}
