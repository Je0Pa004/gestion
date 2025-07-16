import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { AncienneteComponent } from './anciennete.component';

const routes: Routes = [
  { path: '', component: AncienneteComponent },
  { path: 'ajouter', component: AncienneteComponent },
  { path: 'modifier/:id', component: AncienneteComponent },
  { path: 'supprimer/:id', component: AncienneteComponent }
];

@NgModule({
  declarations: [AncienneteComponent],
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
export class AncienneteModule { }
