import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AncienneteService } from '../services/anciennete.service';
import { AttributionService } from '../services/attribution.service';
import { EmployeService } from '../services/employe.service';
import { GradeService } from '../services/grade.service';
import { NationaliteService } from '../services/nationalite.service';
import { PosteService } from '../services/poste.service';
import { ProjetService } from '../services/projet.service';
import { RubriquePaiementService } from '../services/rubriquepaiement.service';
import { TypeContratService } from '../services/typecontrat.service';
import { TypePosteService } from '../services/typeposte.service';
import { TypeProjetService } from '../services/typeprojet.service';
import { TypeRubriqueService } from '../services/typerubrique.service';
import { VilleService } from '../services/ville.service';

interface EntityColumn {
  header: string;
  field: string;
}
interface EntityConfig {
  key: string;
  label: string;
  columns: EntityColumn[];
  data: any[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  entities: EntityConfig[] = [
    { key: 'employe', label: 'Employés', columns: [
      { header: 'Nom', field: 'nom' },
      { header: 'Prénom', field: 'prenom' },
      { header: 'Email', field: 'email' }
    ], data: [] },
    { key: 'ville', label: 'Villes', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] },
    { key: 'projet', label: 'Projets', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] },
    { key: 'poste', label: 'Postes', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] },
    { key: 'grade', label: 'Grades', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] },
    { key: 'nationalite', label: 'Nationalités', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] },
    { key: 'anciennete', label: 'Anciennetés', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] },
    { key: 'attribution', label: 'Attributions', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] },
    { key: 'typecontrat', label: 'Types de Contrat', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] },
    { key: 'typeposte', label: 'Types de Poste', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] },
    { key: 'typeprojet', label: 'Types de Projet', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] },
    { key: 'typerubrique', label: 'Types de Rubrique', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] },
    { key: 'rubriquepaiement', label: 'Rubriques Paiement', columns: [
      { header: 'Libellé', field: 'libelle' }
    ], data: [] }
  ];

  constructor(
    private router: Router,
    private employeService: EmployeService,
    private villeService: VilleService,
    private projetService: ProjetService,
    private posteService: PosteService,
    private gradeService: GradeService,
    private nationaliteService: NationaliteService,
    private typeContratService: TypeContratService,
    private typePosteService: TypePosteService,
    private typeProjetService: TypeProjetService,
    private typeRubriqueService: TypeRubriqueService,
    private rubriquePaiementService: RubriquePaiementService,
    private ancienneteService: AncienneteService,
    private attributionService: AttributionService
  ) {}

  ngOnInit() {
    this.loadAllEntities();
  }

  loadAllEntities() {
    this.entities.forEach(entity => {
      switch (entity.key) {
        case 'employe':
          this.employeService.getAll().subscribe(data => entity.data = data);
          break;
        case 'ville':
          this.villeService.getAll().subscribe(data => entity.data = data);
          break;
        case 'projet':
          this.projetService.getAll().subscribe(data => entity.data = data);
          break;
        case 'poste':
          this.posteService.getAll().subscribe(data => entity.data = data);
          break;
        case 'grade':
          this.gradeService.getAll().subscribe(data => entity.data = data);
          break;
        case 'nationalite':
          this.nationaliteService.getAll().subscribe(data => entity.data = data);
          break;
        case 'typecontrat':
          this.typeContratService.getAll().subscribe(data => entity.data = data);
          break;
        case 'typeposte':
          this.typePosteService.getAll().subscribe(data => entity.data = data);
          break;
        case 'typeprojet':
          this.typeProjetService.getAll().subscribe(data => entity.data = data);
          break;
        case 'typerubrique':
          this.typeRubriqueService.getAll().subscribe(data => entity.data = data);
          break;
        case 'rubriquepaiement':
          this.rubriquePaiementService.getAll().subscribe(data => entity.data = data);
          break;
        case 'anciennete':
          this.ancienneteService.getAll().subscribe(data => entity.data = data);
          break;
        case 'attribution':
          this.attributionService.getAll().subscribe(data => entity.data = data);
          break;
        default:
          break;
      }
    });
  }

  onAdd(entityKey: string) {
    // Redirige vers la page d'ajout de l'entité
    this.router.navigate([`/${entityKey}/ajouter`]);
  }
  onEdit(entityKey: string, item: any) {
    this.router.navigate([`/${entityKey}/modifier`, item.id]);
  }
  onDelete(entityKey: string, item: any) {
    if (confirm('Supprimer cet élément ?')) {
      let deleteObs;
      switch (entityKey) {
        case 'employe':
          deleteObs = this.employeService.delete(item.id);
          break;
        case 'ville':
          deleteObs = this.villeService.delete(item.id);
          break;
        case 'projet':
          deleteObs = this.projetService.delete(item.id);
          break;
        case 'poste':
          deleteObs = this.posteService.delete(item.id);
          break;
        case 'grade':
          deleteObs = this.gradeService.delete(item.id);
          break;
        case 'nationalite':
          deleteObs = this.nationaliteService.delete(item.id);
          break;
        case 'typecontrat':
          deleteObs = this.typeContratService.delete(item.id);
          break;
        case 'typeposte':
          deleteObs = this.typePosteService.delete(item.id);
          break;
        case 'typeprojet':
          deleteObs = this.typeProjetService.delete(item.id);
          break;
        case 'typerubrique':
          deleteObs = this.typeRubriqueService.delete(item.id);
          break;
        case 'rubriquepaiement':
          deleteObs = this.rubriquePaiementService.delete(item.id);
          break;
        case 'anciennete':
          deleteObs = this.ancienneteService.delete(item.id);
          break;
        case 'attribution':
          deleteObs = this.attributionService.delete(item.id);
          break;
        default:
          break;
      }
      if (deleteObs) {
        deleteObs.subscribe(() => this.loadAllEntities());
      }
    }
  }
}
