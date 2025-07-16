package com.gestion.gestion.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gestion.gestion.entities.Employe;
import com.gestion.gestion.repository.EmployeRepository;

@Service
public class EmployeService {
    private final EmployeRepository repository;

    public EmployeService(EmployeRepository repository) {
        this.repository = repository;
    }

    public List<Employe> getAll() {
        return repository.findAll();
    }

    public Employe create(Employe obj) {
        return repository.save(obj);
    }

    public Employe getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Employe update(Long id, Employe obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
