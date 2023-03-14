package com.example.menu;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.stereotype.Controller
public class Controller {



    @GetMapping(path = {"", "/", "/menu"})
    public String getHomePage() {
        return "index";
    }


}
