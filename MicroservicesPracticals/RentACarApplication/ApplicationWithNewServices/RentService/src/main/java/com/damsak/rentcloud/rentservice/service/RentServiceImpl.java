package com.damsak.rentcloud.rentservice.service;

import com.damsak.rentcloud.commons.model.customer.Customer;
import com.damsak.rentcloud.commons.model.rent.Rent;
import com.damsak.rentcloud.commons.model.vehicle.Vehicle;
import com.damsak.rentcloud.rentservice.hystrix.CommonHystrixCommand;
import com.damsak.rentcloud.rentservice.hystrix.VehicleCommand;
import com.damsak.rentcloud.rentservice.model.DetailResponse;
import com.damsak.rentcloud.rentservice.repository.RentRepository;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.ribbon.proxy.annotation.Hystrix;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

@Service
public class RentServiceImpl implements  RentService {

    @Autowired
    RentRepository rentRepository;

    @LoadBalanced
    @Bean
    RestTemplate getRestTemplate(RestTemplateBuilder builder){
        return builder.build();
    }

    @Autowired
    RestTemplate restTemplate;

    @Override
    public Rent save(Rent customer) {
        return rentRepository.save(customer);
    }

    @Override
    public Rent fetchRentById(int id) {
        Optional<Rent> rent = rentRepository.findById(id);

        if (rent.isPresent()) {
            return rent.get();
        } else {
            return new Rent();
        }
    }

    @Override
    public List<Rent> findAll() {
        return rentRepository.findAll();
    }

    @Override
    public DetailResponse findDetailResponse(int id) throws ExecutionException, InterruptedException {


        Rent rent=fetchRentById(id);
        Customer customer=getCustomer(rent.getCustomerId());
        Vehicle vehicle= getVehicle(rent.getVehicleId());

        return new DetailResponse(rent,customer,vehicle);
    }

//    public DetailResponse findDetailResponsefallback(int id) {
//        return new DetailResponse(new Rent(),new Customer(), new Vehicle());
//    }

    private Customer getCustomer(int customerId) throws ExecutionException, InterruptedException {

        CommonHystrixCommand<Customer> customerCommonHystrixCommand = new CommonHystrixCommand<Customer>("default",() ->
        {
            return restTemplate.getForObject("http://profile/services/customers/"+customerId,Customer.class);
        }, () -> {
            return new Customer();
        });

        Future<Customer> customerFuture = customerCommonHystrixCommand.queue();
        return customerFuture.get();

        //Talk to discovery server and  get ip address and port of profile
        //Customer customer=restTemplate.getForObject("http://profile/services/customers/"+customerId,Customer.class);
        //return customer;
    }

    private Vehicle getVehicle(int vehicleId){

        VehicleCommand vehicleCommand = new VehicleCommand(restTemplate,vehicleId);
        return vehicleCommand.execute();
      //  return restTemplate.getForObject("http://vehicle/services/vehicles/"+vehicleId,Vehicle.class);

    }
}
