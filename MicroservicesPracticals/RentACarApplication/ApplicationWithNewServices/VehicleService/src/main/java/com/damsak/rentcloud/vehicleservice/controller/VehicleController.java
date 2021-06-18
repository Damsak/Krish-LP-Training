package com.damsak.rentcloud.vehicleservice.controller;

import com.damsak.rentcloud.commons.model.vehicle.Vehicle;
import com.damsak.rentcloud.vehicleservice.service.VehicleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping(value = "/services/vehicles")
public class VehicleController {

    @Autowired
    VehicleService vehicleservice;

    @PostMapping
    public Vehicle save(@RequestBody Vehicle vehicle) {
        return vehicleservice.save(vehicle);
    }

    @GetMapping(value = "/{id}")
    public Vehicle getVehicle(@PathVariable int id) {
        System.out.println("request came on " + LocalDateTime.now() + "!!!");
        return vehicleservice.fetchVehicleById(id);
    }

    @GetMapping
    public List<Vehicle>  getAllVehicles() {
        return vehicleservice.findAll();
    }



}
