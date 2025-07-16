package com.gestion.gestion.repository;

import com.gestion.gestion.entities.Projet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjetRepository extends JpaRepository<Projet, Long> {}
