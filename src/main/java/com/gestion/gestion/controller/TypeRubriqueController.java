package com.gestion.gestion.controller;

import com.gestion.gestion.entities.TypeRubrique;
import com.gestion.gestion.service.TypeRubriqueService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/typerubriques")
public class TypeRubriqueController {
    private final TypeRubriqueService service;

    public TypeRubriqueController(TypeRubriqueService service) {
        this.service = service;
    }

    @GetMapping
    public List<TypeRubrique> getAll() {
        return service.getAll();
    }

    @PostMapping
    public TypeRubrique create(@RequestBody TypeRubrique obj) {
        return service.create(obj);
    }

    @GetMapping("/{id}")
    public TypeRubrique getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public TypeRubrique update(@PathVariable Long id, @RequestBody TypeRubrique obj) {
        return service.update(id, obj);
    }
}
