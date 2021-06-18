package com.damsak.rentcloud.vehicleservice.repository;

import com.damsak.rentcloud.commons.model.vehicle.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {

}
