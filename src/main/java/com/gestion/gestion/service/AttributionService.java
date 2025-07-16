package com.gestion.gestion.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gestion.gestion.entities.Attribution;
import com.gestion.gestion.repository.AttributionRepository;

@Service
public class AttributionService {
    private final AttributionRepository repository;

    public AttributionService(AttributionRepository repository) {
        this.repository = repository;
    }

    public List<Attribution> getAll() {
        return repository.findAll();
    }

    public Attribution create(Attribution obj) {
        return repository.save(obj);
    }

    public Attribution getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public Attribution update(Long id, Attribution obj) {
        obj.setId(id);
        return repository.save(obj);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
