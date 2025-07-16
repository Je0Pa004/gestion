import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { TypeProjetComponent } from './type-projet.component';

const routes: Routes = [
  { path: '', component: TypeProjetComponent },
  { path: 'ajouter', component: TypeProjetComponent },
  { path: 'modifier/:id', component: TypeProjetComponent },
  { path: 'supprimer/:id', component: TypeProjetComponent }
];

@NgModule({
  declarations: [TypeProjetComponent],
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
export class TypeProjetModule { }
