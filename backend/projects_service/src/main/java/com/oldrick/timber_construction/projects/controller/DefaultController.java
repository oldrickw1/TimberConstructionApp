package com.oldrick.timber_construction.projects.controller;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class DefaultController {

    @GetMapping("/")
    @ResponseStatus(HttpStatus.OK)
    public String defaultResponse(Model model) {
        model.addAttribute("message", "Welcome to the Timber Construction API!");
        return "welcome";
    }

}
