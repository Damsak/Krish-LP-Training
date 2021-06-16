package com.damsak.rentcloud.vehicleservice.controller;


import com.damsak.rentcloud.commons.model.Customer;
import com.damsak.rentcloud.commons.model.Vehicle;
import com.damsak.rentcloud.vehicleservice.service.VehicleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
@RequestMapping(value = "/services")
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @RequestMapping(value = "/vehicle", method = RequestMethod.POST)
    @RolesAllowed("admin")
    public Vehicle save(@RequestBody Vehicle vehicle){

        return vehicleService.save(vehicle);
    }

    @RequestMapping(value = "/vehicle", method = RequestMethod.GET)
    @RolesAllowed("admin")
    public ResponseEntity<Vehicle> fetchVehicle(@RequestParam int id) {

        Vehicle vehicle= vehicleService.fetchVehicleById(id);

        if(vehicle == null) {
            return ResponseEntity.notFound().build(); //dont have a vehicle
        }else {
            return ResponseEntity.ok().body(vehicle); //have a vehicle
        }
    }

    @RequestMapping(value = "/allVehicles", method = RequestMethod.GET)
    @RolesAllowed("user")
    public List<Vehicle> findAll(){

        List<Vehicle> vehicles = vehicleService.findAll();

        return vehicleService.findAll();
    }

}
