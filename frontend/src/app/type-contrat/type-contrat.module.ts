import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { TypeContratComponent } from './type-contrat.component';

const routes: Routes = [
  { path: '', component: TypeContratComponent },
  { path: 'ajouter', component: TypeContratComponent },
  { path: 'modifier/:id', component: TypeContratComponent },
  { path: 'supprimer/:id', component: TypeContratComponent }
];

@NgModule({
  declarations: [TypeContratComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(routes)
  ]
})
export class TypeContratModule { }
