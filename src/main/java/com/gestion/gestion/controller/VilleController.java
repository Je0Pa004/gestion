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

import com.gestion.gestion.entities.Ville;
import com.gestion.gestion.service.VilleService;

@RestController
@RequestMapping("/api/villes")
public class VilleController {
    private final VilleService service;

    public VilleController(VilleService service) {
        this.service = service;
    }

    @GetMapping
    public List<Ville> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Ville create(@RequestBody Ville obj) {
        return service.create(obj);
    }

    @GetMapping("/{id}")
    public Ville getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Ville update(@PathVariable Long id, @RequestBody Ville obj) {
        return service.update(id, obj);
    }
}
