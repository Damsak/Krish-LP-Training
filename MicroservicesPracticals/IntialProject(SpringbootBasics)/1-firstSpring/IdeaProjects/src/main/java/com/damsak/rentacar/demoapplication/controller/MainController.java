package com.damsak.rentacar.demoapplication.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String greeting() {
        return "Hello SpringBoot from GET";
    }

    @RequestMapping(value = "/hello", method = RequestMethod.POST)
    public String greeting2() {
        return "Hello SpringBoot from POST";
    }

}
