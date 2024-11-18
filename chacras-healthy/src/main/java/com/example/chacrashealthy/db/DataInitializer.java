package com.example.chacrashealthy.db;

import com.example.chacrashealthy.Repository.AdminRepository;
import com.example.chacrashealthy.Repository.ChacraRepository;
import com.example.chacrashealthy.Repository.UserRepository;
import com.example.chacrashealthy.domain.Admin;
import com.example.chacrashealthy.domain.Chacra;
import com.example.chacrashealthy.domain.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final AdminRepository adminRepository;
    private final ChacraRepository chacraRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(UserRepository userRepository,
                           AdminRepository adminRepository,
                           ChacraRepository chacraRepository,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.adminRepository = adminRepository;
        this.chacraRepository = chacraRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        // Crear usuarios
        User user1 = new User();
        user1.setEmail("user1@example.com");
        user1.setName("User One");
        user1.setPassword(passwordEncoder.encode("password1"));

        User user2 = new User();
        user2.setEmail("user2@example.com");
        user2.setName("User Two");
        user2.setPassword(passwordEncoder.encode("password2"));

        userRepository.save(user1);
        userRepository.save(user2);

        // Crear administradores
        Admin admin = new Admin();
        admin.setEmail("admin@example.com");
        admin.setPassword(passwordEncoder.encode("adminpass"));

        adminRepository.save(admin);

        // Crear chacras
        Chacra chacra1 = new Chacra();
        chacra1.setTitle("Chacra 1");
        chacra1.setDescription("Descripción de chacra 1");
        chacra1.setOpeningHours("9:00 AM - 6:00 PM");
        chacra1.setUser(user1);

        Chacra chacra2 = new Chacra();
        chacra2.setTitle("Chacra 2");
        chacra2.setDescription("Descripción de chacra 2");
        chacra2.setOpeningHours("10:00 AM - 4:00 PM");
        chacra2.setUser(user1);

        Chacra chacra3 = new Chacra();
        chacra3.setTitle("Chacra 3");
        chacra3.setDescription("Descripción de chacra 3");
        chacra3.setOpeningHours("8:00 AM - 5:00 PM");
        chacra3.setUser(user2);

        Chacra chacra4 = new Chacra();
        chacra4.setTitle("Chacra 4");
        chacra4.setDescription("Descripción de chacra 4");
        chacra4.setOpeningHours("9:00 AM - 3:00 PM");
        chacra4.setUser(user2);

        Chacra chacra5 = new Chacra();
        chacra5.setTitle("Chacra 5");
        chacra5.setDescription("Descripción de chacra 5");
        chacra5.setOpeningHours("7:00 AM - 2:00 PM");
        chacra5.setUser(user1);

        chacraRepository.save(chacra1);
        chacraRepository.save(chacra2);
        chacraRepository.save(chacra3);
        chacraRepository.save(chacra4);
        chacraRepository.save(chacra5);
    }
}