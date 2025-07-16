package com.gestion.gestion.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gestion.gestion.entities.Grade;
import com.gestion.gestion.repository.GradeRepository;

@Service
public class GradeService {
    private final GradeRepository repository;

    public GradeService(GradeRepository repository) {
        this.repository = repository;
    }

    public List<Grade> getAll() {
        return repository.findAll();
    }

    public Grade create(Grade obj) {
        return repository.save(obj);
    }

    public Grade getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Grade update(Long id, Grade obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
