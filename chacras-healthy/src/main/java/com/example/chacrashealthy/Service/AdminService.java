package com.example.chacrashealthy.Service;

import com.example.chacrashealthy.Repository.AdminRepository;
import com.example.chacrashealthy.domain.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Admin loginAdmin(String email, String password) {
        Optional<Admin> optionalAdmin = adminRepository.findByEmail(email);

        if (optionalAdmin.isEmpty() || !passwordEncoder.matches(password, optionalAdmin.get().getPassword())) {
            throw new IllegalArgumentException("Credenciales inválidas.");
        }

        return optionalAdmin.get();
    }
}
