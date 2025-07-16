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

import com.gestion.gestion.entities.Employe;
import com.gestion.gestion.service.EmployeService;

@RestController
@RequestMapping("/api/employes")
public class EmployeController {
    private final EmployeService service;

    public EmployeController(EmployeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Employe> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Employe create(@RequestBody Employe obj) {
        System.out.println("Employe reçu: " + obj);
        Employe saved = service.create(obj);
        System.out.println("Employe sauvegardé: " + saved);
        return saved;
    }

    @GetMapping("/{id}")
    public Employe getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Employe update(@PathVariable Long id, @RequestBody Employe obj) {
        return service.update(id, obj);
    }
}
