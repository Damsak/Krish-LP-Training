package com.damsak.rentcloud.rentservice.controller;

import com.damsak.rentcloud.commons.model.rent.Rent;
import com.damsak.rentcloud.rentservice.model.Response;
import com.damsak.rentcloud.rentservice.model.SimpleResponse;
import com.damsak.rentcloud.rentservice.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping(value = "/services/rents")
public class RentController {

    @Autowired
    RentService rentService;

    @PostMapping
    public Rent save(@RequestBody Rent rent) { return rentService.save(rent);
    }

    @GetMapping(value = "/{id}")
    public Response getRent(@PathVariable int id, @RequestParam(required = false) String type) throws ExecutionException, InterruptedException{

        //if the type is not there, we only return rent model
        if(type==null){
            return  new SimpleResponse(rentService.fetchRentById(id));
        }else{
            return  rentService.findDetailResponse(id);
        }
    }

    @GetMapping
    public List<Rent> getAllRents() {
        return rentService.findAll();
    }


}
