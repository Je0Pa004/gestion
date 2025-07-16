import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { GradeComponent } from './grade.component';

const routes: Routes = [
  { path: '', component: GradeComponent },
  { path: 'ajouter', component: GradeComponent },
  { path: 'modifier/:id', component: GradeComponent },
  { path: 'supprimer/:id', component: GradeComponent }
];

@NgModule({
  declarations: [GradeComponent],
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
export class GradeModule { }
