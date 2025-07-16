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

import com.gestion.gestion.entities.Anciennete;
import com.gestion.gestion.service.AncienneteService;

@RestController
@RequestMapping("/api/anciennetes")
public class AncienneteController {
    private final AncienneteService service;

    public AncienneteController(AncienneteService service) {
        this.service = service;
    }

    @GetMapping
    public List<Anciennete> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Anciennete create(@RequestBody Anciennete obj) {
        return service.create(obj);
    }

    @GetMapping("/{id}")
    public Anciennete getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Anciennete update(@PathVariable Long id, @RequestBody Anciennete obj) {
        return service.update(id, obj);
    }
}
