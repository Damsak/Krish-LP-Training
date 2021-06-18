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



//    @RequestMapping(value = "/vehicle", method = RequestMethod.POST)
//    public Vehicle save(@RequestBody Vehicle vehicle){
//
//        return vehicleService.save(vehicle);
//    }
//
//    @RequestMapping(value = "/vehicle", method = RequestMethod.GET)
//    public ResponseEntity<Vehicle> fetchVehicle(@RequestParam int id) {
//
//        Vehicle vehicle= vehicleService.fetchVehicleById(id);
//
//        if(vehicle == null) {
//            return ResponseEntity.notFound().build(); //dont have a vehicle
//        }else {
//            return ResponseEntity.ok().body(vehicle); //have a vehicle
//        }
//    }
//
//    @RequestMapping(value = "/allVehicles", method = RequestMethod.GET)
//    public List<Vehicle> findAll(){
//
//        List<Vehicle> vehicles = vehicleService.findAll();
//
//        return vehicleService.findAll();
//    }

}
