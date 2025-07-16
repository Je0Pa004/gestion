package com.gestion.gestion.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gestion.gestion.entities.Poste;
import com.gestion.gestion.repository.PosteRepository;

@Service
public class PosteService {
    private final PosteRepository repository;

    public PosteService(PosteRepository repository) {
        this.repository = repository;
    }

    public List<Poste> getAll() {
        return repository.findAll();
    }

    public Poste create(Poste obj) {
        return repository.save(obj);
    }

    public Poste getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Poste update(Long id, Poste obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
