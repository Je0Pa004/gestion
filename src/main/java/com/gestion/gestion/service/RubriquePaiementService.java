package com.gestion.gestion.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gestion.gestion.entities.RubriquePaiement;
import com.gestion.gestion.repository.RubriquePaiementRepository;

@Service
public class RubriquePaiementService {
    private final RubriquePaiementRepository repository;

    public RubriquePaiementService(RubriquePaiementRepository repository) {
        this.repository = repository;
    }

    public List<RubriquePaiement> getAll() {
        return repository.findAll();
    }

    public RubriquePaiement create(RubriquePaiement obj) {
        return repository.save(obj);
    }

    public RubriquePaiement getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public RubriquePaiement update(Long id, RubriquePaiement obj) {
        obj.setId(id);
        return repository.save(obj);
    }
}
