package com.gestion.gestion.service;

import com.gestion.gestion.entities.TypeRubrique;
import com.gestion.gestion.repository.TypeRubriqueRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeRubriqueService {
    private final TypeRubriqueRepository repository;

    public TypeRubriqueService(TypeRubriqueRepository repository) {
        this.repository = repository;
    }

    public List<TypeRubrique> getAll() {
        return repository.findAll();
    }

    public TypeRubrique create(TypeRubrique obj) {
        return repository.save(obj);
    }

    public TypeRubrique getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public TypeRubrique update(Long id, TypeRubrique obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
