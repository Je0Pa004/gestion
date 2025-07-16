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

import com.gestion.gestion.entities.TypeContrat;
import com.gestion.gestion.service.TypeContratService;

@RestController
@RequestMapping("/api/typecontrats")
public class TypeContratController {
    private final TypeContratService service;

    public TypeContratController(TypeContratService service) {
        this.service = service;
    }

    @GetMapping
    public List<TypeContrat> getAll() {
        return service.getAll();
    }

    @PostMapping
    public TypeContrat create(@RequestBody TypeContrat obj) {
        return service.create(obj);
    }

    @GetMapping("/{id}")
    public TypeContrat getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public TypeContrat update(@PathVariable Long id, @RequestBody TypeContrat obj) {
        return service.update(id, obj);
    }
}
