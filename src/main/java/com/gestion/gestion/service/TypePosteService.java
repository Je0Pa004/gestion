package com.gestion.gestion.service;

import com.gestion.gestion.entities.TypePoste;
import com.gestion.gestion.repository.TypePosteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypePosteService {
    private final TypePosteRepository repository;

    public TypePosteService(TypePosteRepository repository) {
        this.repository = repository;
    }

    public List<TypePoste> getAll() {
        return repository.findAll();
    }

    public TypePoste create(TypePoste obj) {
        return repository.save(obj);
    }

    public TypePoste getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public TypePoste update(Long id, TypePoste obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
