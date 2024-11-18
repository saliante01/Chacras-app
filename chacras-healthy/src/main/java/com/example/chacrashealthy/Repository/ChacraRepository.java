package com.example.chacrashealthy.Repository;

import com.example.chacrashealthy.domain.Chacra;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChacraRepository extends JpaRepository<Chacra, Long> {
    List<Chacra> findByUserId(Long userId);
}
