import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// Importer les composants de chaque entité (à compléter)
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employe', loadChildren: () => import('./employe/employe.module').then(m => m.EmployeModule) },
  { path: 'anciennete', loadChildren: () => import('./anciennete/anciennete.module').then(m => m.AncienneteModule) },
  { path: 'attribution', loadChildren: () => import('./attribution/attribution.module').then(m => m.AttributionModule) },
  { path: 'grade', loadChildren: () => import('./grade/grade.module').then(m => m.GradeModule) },
  { path: 'nationalite', loadChildren: () => import('./nationalite/nationalite.module').then(m => m.NationaliteModule) },
  { path: 'poste', loadChildren: () => import('./poste/poste.module').then(m => m.PosteModule) },
  { path: 'projet', loadChildren: () => import('./projet/projet.module').then(m => m.ProjetModule) },
  { path: 'rubriquepaiement', loadChildren: () => import('./rubrique-paiement/rubrique-paiement.module').then(m => m.RubriquePaiementModule) },
  { path: 'typecontrat', loadChildren: () => import('./type-contrat/type-contrat.module').then(m => m.TypeContratModule) },
  { path: 'typeposte', loadChildren: () => import('./type-poste/type-poste.module').then(m => m.TypePosteModule) },
  { path: 'typeprojet', loadChildren: () => import('./type-projet/type-projet.module').then(m => m.TypeProjetModule) },
  { path: 'typerubrique', loadChildren: () => import('./type-rubrique/type-rubrique.module').then(m => m.TypeRubriqueModule) },
  { path: 'ville', loadChildren: () => import('./ville/ville.module').then(m => m.VilleModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
