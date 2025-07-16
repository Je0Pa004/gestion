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

import com.gestion.gestion.entities.Nationalite;
import com.gestion.gestion.service.NationaliteService;

@RestController
@RequestMapping("/api/nationalites")
public class NationaliteController {
    private final NationaliteService service;

    public NationaliteController(NationaliteService service) {
        this.service = service;
    }

    @GetMapping
    public List<Nationalite> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Nationalite create(@RequestBody Nationalite obj) {
        return service.create(obj);
    }

    @GetMapping("/{id}")
    public Nationalite getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Nationalite update(@PathVariable Long id, @RequestBody Nationalite obj) {
        return service.update(id, obj);
    }
}
