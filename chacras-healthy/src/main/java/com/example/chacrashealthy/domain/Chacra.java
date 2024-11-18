package com.example.chacrashealthy.domain;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "chacras")
@Data
public class Chacra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 500)
    private String description;

    @Column(nullable = false)
    private String openingHours;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
