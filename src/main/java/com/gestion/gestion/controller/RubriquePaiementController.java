package com.gestion.gestion.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.gestion.entities.RubriquePaiement;
import com.gestion.gestion.service.RubriquePaiementService;

@RestController
@RequestMapping("/api/rubriquepaiements")
public class RubriquePaiementController {
    private final RubriquePaiementService service;

    public RubriquePaiementController(RubriquePaiementService service) {
        this.service = service;
    }

    @GetMapping
    public List<RubriquePaiement> getAll() {
        return service.getAll();
    }

    @PostMapping
    public RubriquePaiement create(@RequestBody RubriquePaiement obj) {
        return service.create(obj);
    }

    @GetMapping("/{id}")
    public RubriquePaiement getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public RubriquePaiement update(@PathVariable Long id, @RequestBody RubriquePaiement obj) {
        return service.update(id, obj);
    }
}
