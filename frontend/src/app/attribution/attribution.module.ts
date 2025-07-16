import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { AttributionComponent } from './attribution.component';

const routes: Routes = [
  { path: '', component: AttributionComponent },
  { path: 'ajouter', component: AttributionComponent },
  { path: 'modifier/:id', component: AttributionComponent },
  { path: 'supprimer/:id', component: AttributionComponent }
];

@NgModule({
  declarations: [AttributionComponent],
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
export class AttributionModule { }
