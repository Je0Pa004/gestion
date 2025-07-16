package com.gestion.gestion.repository;

import com.gestion.gestion.entities.Employe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeRepository extends JpaRepository<Employe, Long> {}
