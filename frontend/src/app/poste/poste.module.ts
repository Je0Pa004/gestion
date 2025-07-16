import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { PosteComponent } from './poste.component';

const routes: Routes = [
  { path: '', component: PosteComponent },
  { path: 'ajouter', component: PosteComponent },
  { path: 'modifier/:id', component: PosteComponent },
  { path: 'supprimer/:id', component: PosteComponent }
];

@NgModule({
  declarations: [PosteComponent],
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
export class PosteModule { }
