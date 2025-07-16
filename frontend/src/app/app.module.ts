import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router'; // ⚠️ Pour router-outlet et routerLink

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Tes modules fonctionnels
import { AncienneteModule } from './anciennete/anciennete.module';
import { AttributionModule } from './attribution/attribution.module';
import { EmployeModule } from './employe/employe.module';
import { GradeModule } from './grade/grade.module';
import { NationaliteModule } from './nationalite/nationalite.module';
import { PosteModule } from './poste/poste.module';
import { ProjetModule } from './projet/projet.module';
import { RubriquePaiementModule } from './rubrique-paiement/rubrique-paiement.module';
import { TypeContratModule } from './type-contrat/type-contrat.module';
import { TypePosteModule } from './type-poste/type-poste.module';
import { TypeProjetModule } from './type-projet/type-projet.module';
import { TypeRubriqueModule } from './type-rubrique/type-rubrique.module';
import { VilleModule } from './ville/ville.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar.component';

import { AppRoutingModule } from './app-routing.module'; // ⚠️ Si tu as des routes

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule, // ⚠️ Pour le routage (router-outlet)

    // Angular Material modules
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,

    // Modules fonctionnels
    AncienneteModule,
    AttributionModule,
    EmployeModule,
    GradeModule,
    NationaliteModule,
    PosteModule,
    ProjetModule,
    RubriquePaiementModule,
    TypeContratModule,
    TypePosteModule,
    TypeProjetModule,
    TypeRubriqueModule,
    VilleModule,

    AppRoutingModule // ⚠️ à mettre en dernier si possible pour éviter les conflits de route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
