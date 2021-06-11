package com.damsak.configconsumer.configconsumer;

import com.damsak.configconsumer.configconsumer.model.MemberProfileConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
//public class ProfileController {
//
//    @Autowired
//    MemberProfileConfiguration memberProfileConfiguration;
//
//    @RequestMapping("/profile")
//    public MemberProfileConfiguration getConfig(){
//        return memberProfileConfiguration;
//    }
//}

//to fetch this to the ui
@Controller
public class ProfileController {

    @Autowired
    MemberProfileConfiguration memberProfileConfiguration;

    @RequestMapping("/profile")
    public String getConfig(Model model){

        model.addAttribute("model",memberProfileConfiguration.getDefaultModel());
        model.addAttribute("min",memberProfileConfiguration.getMinRentPeriod());

        return "mprofile";
    }

}
