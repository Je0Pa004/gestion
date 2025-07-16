package com.gestion.gestion.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gestion.gestion.entities.Ville;
import com.gestion.gestion.repository.VilleRepository;

@Service
public class VilleService {
    private final VilleRepository repository;

    public VilleService(VilleRepository repository) {
        this.repository = repository;
    }

    public List<Ville> getAll() {
        return repository.findAll();
    }

    public Ville create(Ville obj) {
        return repository.save(obj);
    }

    public Ville getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Ville update(Long id, Ville obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
