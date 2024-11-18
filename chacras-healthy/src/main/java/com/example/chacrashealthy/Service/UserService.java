package com.example.chacrashealthy.Service;

import com.example.chacrashealthy.Repository.UserRepository;
import com.example.chacrashealthy.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new IllegalArgumentException("El email ya está registrado.");
        }

        // Encriptar contraseña
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User loginUser(String email, String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isEmpty()) {
            throw new IllegalArgumentException("Credenciales inválidas.");
        }

        User user = optionalUser.get();

        // Verificar contraseña encriptada
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IllegalArgumentException("Credenciales inválidas.");
        }

        return user;
    }
}