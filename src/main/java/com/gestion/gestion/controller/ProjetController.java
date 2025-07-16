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

import com.gestion.gestion.entities.Projet;
import com.gestion.gestion.service.ProjetService;

@RestController
@RequestMapping("/api/projets")
public class ProjetController {
    private final ProjetService service;

    public ProjetController(ProjetService service) {
        this.service = service;
    }

    @GetMapping
    public List<Projet> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Projet create(@RequestBody Projet obj) {
        return service.create(obj);
    }

    @GetMapping("/{id}")
    public Projet getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Projet update(@PathVariable Long id, @RequestBody Projet obj) {
        return service.update(id, obj);
    }
}
