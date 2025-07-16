package com.gestion.gestion.service;

import com.gestion.gestion.entities.Anciennete;
import com.gestion.gestion.repository.AncienneteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AncienneteService {
    private final AncienneteRepository repository;

    public AncienneteService(AncienneteRepository repository) {
        this.repository = repository;
    }

    public List<Anciennete> getAll() {
        return repository.findAll();
    }

    public Anciennete create(Anciennete obj) {
        return repository.save(obj);
    }

    public Anciennete getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Anciennete update(Long id, Anciennete obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
