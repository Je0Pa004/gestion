package com.gestion.gestion.service;

import com.gestion.gestion.entities.Projet;
import com.gestion.gestion.repository.ProjetRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjetService {
    private final ProjetRepository repository;

    public ProjetService(ProjetRepository repository) {
        this.repository = repository;
    }

    public List<Projet> getAll() {
        return repository.findAll();
    }

    public Projet create(Projet obj) {
        return repository.save(obj);
    }

    public Projet getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Projet update(Long id, Projet obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
