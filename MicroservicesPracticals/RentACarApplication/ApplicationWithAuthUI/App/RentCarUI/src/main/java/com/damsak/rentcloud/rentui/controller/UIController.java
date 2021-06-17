package com.damsak.rentcloud.rentui.controller;

import com.damsak.rentcloud.commons.model.Customer;
import com.damsak.rentcloud.rentui.config.AccessToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

@Controller
@EnableOAuth2Sso //To tell ui service that it needs to authenticate from oauth server
public class UIController extends WebSecurityConfigurerAdapter {

    @Autowired
    RestTemplate restTemplate;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        //To ignore "/" uri(no need to authenticate).All other uris must be authenticated
        http.authorizeRequests()
                .antMatchers("/")
                .permitAll()
                .anyRequest()
                .authenticated();
    }


    @RequestMapping(value = "/")
    public String loadUI(){
        return "home";
    }

    @RequestMapping(value = "/secure")
    public String loadSecuredUI(){
        return "secure";
    }

    @RequestMapping(value = "/customers")
    public String loadCustomers(Model model){
        //invoke profile service using the access token provided by the ui

        //httpheaders to pass the access tokens
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", AccessToken.getAccessToken()); //header and value

        //now use the rest template to invoke the endpoints
        HttpEntity<Customer> customerHttpEntity = new HttpEntity<>(httpHeaders);

        try {
            //Get the customers from Profile service
            ResponseEntity<Customer[]> responseEntity = restTemplate.exchange("http://localhost:8181/services/allCustomers", HttpMethod.GET, customerHttpEntity, Customer[].class);
            model.addAttribute("customers", responseEntity.getBody());
        } catch (HttpStatusCodeException e) {
            ResponseEntity responseEntity = ResponseEntity.status(e.getRawStatusCode()).headers(e.getResponseHeaders()).body(e.getResponseBodyAsString());
            model.addAttribute("error", responseEntity);
        }

        return "secure";
    }
}
