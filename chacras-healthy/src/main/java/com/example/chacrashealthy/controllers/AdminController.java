package com.example.chacrashealthy.controllers;

import com.example.chacrashealthy.Service.AdminService;
import com.example.chacrashealthy.domain.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public Admin loginAdmin(@RequestBody Admin admin) {
        return adminService.loginAdmin(admin.getEmail(), admin.getPassword());
    }
}
