import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { TypeRubriqueComponent } from './type-rubrique.component';

const routes: Routes = [
  { path: '', component: TypeRubriqueComponent },
  { path: 'ajouter', component: TypeRubriqueComponent },
  { path: 'modifier/:id', component: TypeRubriqueComponent },
  { path: 'supprimer/:id', component: TypeRubriqueComponent }
];

@NgModule({
  declarations: [TypeRubriqueComponent],
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
export class TypeRubriqueModule { }
