package com.damsak.rentcloud.authorizationserver.service;

import com.damsak.rentcloud.authorizationserver.model.AuthUserDetail;
import com.damsak.rentcloud.authorizationserver.model.User;
import com.damsak.rentcloud.authorizationserver.repository.UserDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AccountStatusUserDetailsChecker;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserDetailRepository userDetailRepository;

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {

        Optional<User> optionalUser = userDetailRepository.findByUsername(name);

        //if the user is not there
        optionalUser.orElseThrow(() -> new UsernameNotFoundException("Username or Password is wrong"));

        UserDetails userDetails = new AuthUserDetail(optionalUser.get());

        //check for valid account, valid credentials, etc
        new AccountStatusUserDetailsChecker().check(userDetails);

        return userDetails;

    }
}
