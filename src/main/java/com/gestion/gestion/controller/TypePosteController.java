package com.gestion.gestion.controller;

import com.gestion.gestion.entities.TypePoste;
import com.gestion.gestion.service.TypePosteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/typepostes")
public class TypePosteController {
    private final TypePosteService service;

    public TypePosteController(TypePosteService service) {
        this.service = service;
    }

    @GetMapping
    public List<TypePoste> getAll() {
        return service.getAll();
    }

    @PostMapping
    public TypePoste create(@RequestBody TypePoste obj) {
        return service.create(obj);
    }

    @GetMapping("/{id}")
    public TypePoste getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public TypePoste update(@PathVariable Long id, @RequestBody TypePoste obj) {
        return service.update(id, obj);
    }
}
