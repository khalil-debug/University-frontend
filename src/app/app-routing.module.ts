import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';

//definition de l'acceuil general de localhost:4200 
const routes: Routes = [
  {path: 'etudiants', component: EtudiantListComponent},
  {path: 'creer-etudiant', component: CreerEtudiantComponent},
  {path:'', redirectTo: 'etudiants', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
