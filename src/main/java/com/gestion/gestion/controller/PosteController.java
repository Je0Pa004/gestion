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

import com.gestion.gestion.entities.Poste;
import com.gestion.gestion.service.PosteService;

@RestController
@RequestMapping("/api/postes")
public class PosteController {
    private final PosteService service;

    public PosteController(PosteService service) {
        this.service = service;
    }

    @GetMapping
    public List<Poste> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Poste create(@RequestBody Poste obj) {
        return service.create(obj);
    }

    @GetMapping("/{id}")
    public Poste getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Poste update(@PathVariable Long id, @RequestBody Poste obj) {
        return service.update(id, obj);
    }
}
