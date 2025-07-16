package com.gestion.gestion.service;

import com.gestion.gestion.entities.TypeContrat;
import com.gestion.gestion.repository.TypeContratRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeContratService {
    private final TypeContratRepository repository;

    public TypeContratService(TypeContratRepository repository) {
        this.repository = repository;
    }

    public List<TypeContrat> getAll() {
        return repository.findAll();
    }

    public TypeContrat create(TypeContrat obj) {
        return repository.save(obj);
    }

    public TypeContrat getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public TypeContrat update(Long id, TypeContrat obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
