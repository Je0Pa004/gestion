package com.gestion.gestion.service;

import com.gestion.gestion.entities.TypeProjet;
import com.gestion.gestion.repository.TypeProjetRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeProjetService {
    private final TypeProjetRepository repository;

    public TypeProjetService(TypeProjetRepository repository) {
        this.repository = repository;
    }

    public List<TypeProjet> getAll() {
        return repository.findAll();
    }

    public TypeProjet create(TypeProjet obj) {
        return repository.save(obj);
    }

    public TypeProjet getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public TypeProjet update(Long id, TypeProjet obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
