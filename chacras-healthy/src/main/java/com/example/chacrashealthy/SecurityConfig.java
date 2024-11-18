package com.example.chacrashealthy;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(
                                "/users/register",  // Registro de usuarios
                                "/users/login",     // Login de usuarios
                                "/admins/login",    // Login de administradores
                                "/chacras/all",     // Ver todas las chacras
                                "/chacras/{id}",    // Ver detalles de una chacra por ID
                                "/chacras/user/{userId}" // Ver chacras asociadas a un usuario
                        ).permitAll() // Permitir acceso sin autenticación
                        .requestMatchers(
                                "/chacras/add",     // Agregar una chacra
                                "/chacras/{id}"     // Eliminar una chacra
                        ).authenticated() // Requieren autenticación
                        .anyRequest().authenticated() // Proteger cualquier otro endpoint
                )
                .csrf(csrf -> csrf.disable()) // Desactivar CSRF para facilitar el desarrollo
                .cors(); // Habilitar CORS para la conexión con el frontend

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Encriptar contraseñas con BCrypt
    }
}
