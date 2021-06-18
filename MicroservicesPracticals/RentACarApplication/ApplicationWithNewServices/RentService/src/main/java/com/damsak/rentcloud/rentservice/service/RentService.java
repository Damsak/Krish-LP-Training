package com.damsak.rentcloud.rentservice.service;

import com.damsak.rentcloud.commons.model.rent.Rent;
import com.damsak.rentcloud.rentservice.model.DetailResponse;

import java.util.List;

public interface RentService {

    Rent save(Rent customer);

    Rent fetchRentById(int id);

    List<Rent> findAll();

    DetailResponse findDetailResponse(int id);
}
