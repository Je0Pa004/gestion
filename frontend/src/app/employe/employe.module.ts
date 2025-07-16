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
import { EmployeComponent } from './employe.component';

const routes: Routes = [
  { path: '', component: EmployeComponent },
  { path: 'ajouter', component: EmployeComponent },
  { path: 'modifier/:id', component: EmployeComponent },
  { path: 'supprimer/:id', component: EmployeComponent }
];

@NgModule({
  declarations: [EmployeComponent],
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
  ],
  exports: [EmployeComponent]
})
export class EmployeModule { }
