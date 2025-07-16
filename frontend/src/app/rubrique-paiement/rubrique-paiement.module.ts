import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { RubriquePaiementComponent } from './rubrique-paiement.component';

const routes: Routes = [
  { path: '', component: RubriquePaiementComponent },
  { path: 'ajouter', component: RubriquePaiementComponent },
  { path: 'modifier/:id', component: RubriquePaiementComponent },
  { path: 'supprimer/:id', component: RubriquePaiementComponent }
];

@NgModule({
  declarations: [RubriquePaiementComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class RubriquePaiementModule { }
