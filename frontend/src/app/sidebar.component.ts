import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  entities = [
    { name: 'Employés', route: '/employe' },
    { name: 'Ancienneté', route: '/anciennete' },
    { name: 'Attribution', route: '/attribution' },
    { name: 'Grade', route: '/grade' },
    { name: 'Nationalité', route: '/nationalite' },
    { name: 'Poste', route: '/poste' },
    { name: 'Projet', route: '/projet' },
    { name: 'Rubrique Paiement', route: '/rubrique-paiement' },
    { name: 'Type Contrat', route: '/type-contrat' },
    { name: 'Type Poste', route: '/type-poste' },
    { name: 'Type Projet', route: '/type-projet' },
    { name: 'Type Rubrique', route: '/type-rubrique' },
    { name: 'Ville', route: '/ville' }
  ];
}
