package com.example.chacrashealthy.Service;

import com.example.chacrashealthy.Repository.ChacraRepository;
import com.example.chacrashealthy.domain.Chacra;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChacraService {

    @Autowired
    private ChacraRepository chacraRepository;

    public List<Chacra> getAllChacras() {
        return chacraRepository.findAll();
    }

    public Chacra getChacraById(Long id) {
        return chacraRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Chacra no encontrada con el ID: " + id));
    }

    public List<Chacra> getChacrasByUserId(Long userId) {
        return chacraRepository.findByUserId(userId);
    }

    public void deleteChacra(Long id) {
        if (!chacraRepository.existsById(id)) {
            throw new IllegalArgumentException("No se puede eliminar, la chacra con el ID: " + id + " no existe.");
        }
        chacraRepository.deleteById(id);
    }

    public Chacra addChacra(Chacra chacra) {
        return chacraRepository.save(chacra);
    }

    @Transactional
    public Chacra updateChacra(Long id, Chacra updatedChacra) {
        Optional<Chacra> existingChacraOptional = chacraRepository.findById(id);
        if (existingChacraOptional.isEmpty()) {
            throw new RuntimeException("Chacra con ID " + id + " no encontrada.");
        }

        Chacra existingChacra = existingChacraOptional.get();
        existingChacra.setTitle(updatedChacra.getTitle());
        existingChacra.setDescription(updatedChacra.getDescription());
        existingChacra.setOpeningHours(updatedChacra.getOpeningHours());
        // Si es necesario actualizar el usuario, puedes incluir la lógica aquí.

        return chacraRepository.save(existingChacra);
    }
}

