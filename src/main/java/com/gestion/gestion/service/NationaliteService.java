package com.gestion.gestion.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gestion.gestion.entities.Nationalite;
import com.gestion.gestion.repository.NationaliteRepository;

@Service
public class NationaliteService {
    private final NationaliteRepository repository;

    public NationaliteService(NationaliteRepository repository) {
        this.repository = repository;
    }

    public List<Nationalite> getAll() {
        return repository.findAll();
    }

    public Nationalite create(Nationalite obj) {
        return repository.save(obj);
    }

    public Nationalite getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Nationalite update(Long id, Nationalite obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
