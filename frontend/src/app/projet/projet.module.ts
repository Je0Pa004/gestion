import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { ProjetComponent } from './projet.component';

const routes: Routes = [
  { path: '', component: ProjetComponent },
  { path: 'ajouter', component: ProjetComponent },
  { path: 'modifier/:id', component: ProjetComponent },
  { path: 'supprimer/:id', component: ProjetComponent }
];

@NgModule({
  declarations: [ProjetComponent],
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
export class ProjetModule { }
