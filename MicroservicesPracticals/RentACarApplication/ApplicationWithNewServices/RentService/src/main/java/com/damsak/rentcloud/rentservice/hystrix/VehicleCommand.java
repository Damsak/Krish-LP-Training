package com.damsak.rentcloud.rentservice.hystrix;

import com.damsak.rentcloud.commons.model.vehicle.Vehicle;
import com.netflix.hystrix.HystrixCommand;
import com.netflix.hystrix.HystrixCommandGroupKey;
import org.springframework.web.client.RestTemplate;

public class VehicleCommand extends HystrixCommand<Vehicle> {

    //Invoke the endpoint from this class

    RestTemplate restTemplate;
    int vehicleId;

    public VehicleCommand(RestTemplate restTemplate, int vehicleId){
        super(HystrixCommandGroupKey.Factory.asKey("default"));
        this.restTemplate = restTemplate;
        this.vehicleId = vehicleId;
    }

    @Override
    protected Vehicle run() throws Exception {
        return  restTemplate.getForObject("http://vehicle/services/vehicles/"+vehicleId,Vehicle.class);
    }

    @Override
    protected Vehicle getFallback() {
        System.out.println("Hit vehicle fallback");
        return new Vehicle();
    }
}
