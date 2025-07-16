import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { VilleComponent } from './ville.component';

const routes: Routes = [
  { path: '', component: VilleComponent },
  { path: 'ajouter', component: VilleComponent },
  { path: 'modifier/:id', component: VilleComponent },
  { path: 'supprimer/:id', component: VilleComponent }
];

@NgModule({
  declarations: [VilleComponent],
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
export class VilleModule { }
