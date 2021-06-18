package com.damsak.rentcloud.vehicleservice.service;

import com.damsak.rentcloud.commons.model.vehicle.Vehicle;

import java.util.List;

public interface VehicleService {

    Vehicle save(Vehicle vehicle);

    Vehicle fetchVehicleById(int id);

    List<Vehicle> findAll();
}
