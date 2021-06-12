package com.damsak.rentcloud.vehicleservice.service;

import com.damsak.rentcloud.commons.model.Customer;
import com.damsak.rentcloud.commons.model.Vehicle;
import com.damsak.rentcloud.vehicleservice.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleServiceImpl implements VehicleService{

    @Autowired
    VehicleRepository vehicleRepository;

    @Override
    public Vehicle save(Vehicle vehicle) { return vehicleRepository.save(vehicle);
    }

    public Vehicle fetchVehicleById(int id){

        Optional<Vehicle> vehicle= vehicleRepository.findById(id);

        //now we need to check for the availability of the vehicle record
        if(vehicle.isPresent()){
            return vehicle.get();
        }
        return null;
    }

    public List<Vehicle> findAll() { return  vehicleRepository.findAll();}

}
