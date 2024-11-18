package com.example.chacrashealthy.controllers;

import com.example.chacrashealthy.Service.UserService;
import com.example.chacrashealthy.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }


    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        return userService.loginUser(user.getEmail(), user.getPassword());
    }

}