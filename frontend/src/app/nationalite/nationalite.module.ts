import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { NationaliteComponent } from './nationalite.component';

const routes: Routes = [
  { path: '', component: NationaliteComponent },
  { path: 'ajouter', component: NationaliteComponent },
  { path: 'modifier/:id', component: NationaliteComponent },
  { path: 'supprimer/:id', component: NationaliteComponent }
];

@NgModule({
  declarations: [NationaliteComponent],
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
export class NationaliteModule { }
