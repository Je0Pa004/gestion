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

import com.gestion.gestion.entities.TypeProjet;
import com.gestion.gestion.service.TypeProjetService;

@RestController
@RequestMapping("/api/typeprojets")
public class TypeProjetController {
    private final TypeProjetService service;

    public TypeProjetController(TypeProjetService service) {
        this.service = service;
    }

    @GetMapping
    public List<TypeProjet> getAll() {
        return service.getAll();
    }

    @PostMapping
    public TypeProjet create(@RequestBody TypeProjet obj) {
        return service.create(obj);
    }

    @GetMapping("/{id}")
    public TypeProjet getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public TypeProjet update(@PathVariable Long id, @RequestBody TypeProjet obj) {
        return service.update(id, obj);
    }
}
