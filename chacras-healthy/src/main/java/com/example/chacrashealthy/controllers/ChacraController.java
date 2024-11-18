package com.example.chacrashealthy.controllers;

import com.example.chacrashealthy.Service.ChacraService;
import com.example.chacrashealthy.domain.Chacra;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chacras")
public class ChacraController {

    @Autowired
    private ChacraService chacraService;

    // Obtener todas las chacras
    @GetMapping("/all")
    public List<Chacra> getAllChacras() {
        return chacraService.getAllChacras();
    }

    // Obtener chacra por ID
    @GetMapping("/{id}")
    public Chacra getChacraById(@PathVariable Long id) {
        return chacraService.getChacraById(id);
    }

    // Obtener chacras por usuario
    @GetMapping("/user/{userId}")
    public List<Chacra> getChacrasByUserId(@PathVariable Long userId) {
        return chacraService.getChacrasByUserId(userId);
    }

    // Agregar una chacra
    @PostMapping("/add")
    public Chacra addChacra(@RequestBody Chacra chacra) {
        return chacraService.addChacra(chacra);
    }

    // Eliminar una chacra
    @DeleteMapping("/{id}")
    public String deleteChacra(@PathVariable Long id) {
        chacraService.deleteChacra(id);
        return "Chacra con ID " + id + " eliminada correctamente.";
    }

    @PutMapping("/{id}")
    public ResponseEntity<Chacra> updateChacra(@PathVariable Long id, @RequestBody Chacra updatedChacra) {
        Chacra updated = chacraService.updateChacra(id, updatedChacra);
        return ResponseEntity.ok(updated);
    }
}