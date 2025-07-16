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

import com.gestion.gestion.entities.Attribution;
import com.gestion.gestion.service.AttributionService;

@RestController
@RequestMapping("/api/attributions")
public class AttributionController {
    private final AttributionService service;

    public AttributionController(AttributionService service) {
        this.service = service;
    }

    @GetMapping
    public List<Attribution> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Attribution create(@RequestBody Attribution obj) {
        return service.create(obj);
    }

    @GetMapping("/{id}")
    public Attribution getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Attribution update(@PathVariable Long id, @RequestBody Attribution obj) {
        return service.update(id, obj);
    }
}
