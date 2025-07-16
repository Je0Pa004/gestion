import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { TypePosteComponent } from './type-poste.component';

const routes: Routes = [
  { path: '', component: TypePosteComponent },
  { path: 'ajouter', component: TypePosteComponent },
  { path: 'modifier/:id', component: TypePosteComponent },
  { path: 'supprimer/:id', component: TypePosteComponent }
];

@NgModule({
  declarations: [TypePosteComponent],
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
export class TypePosteModule { }
