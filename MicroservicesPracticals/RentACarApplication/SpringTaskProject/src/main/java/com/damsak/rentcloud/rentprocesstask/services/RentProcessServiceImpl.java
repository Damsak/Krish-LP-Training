package com.damsak.rentcloud.rentprocesstask.services;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
public class RentProcessServiceImpl implements RentProcessService {


    @Override
    public boolean validateDL(String dlNumber) {
        return dlNumber.length()>5;
    }
}
