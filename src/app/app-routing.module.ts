import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerEtudiantComponent } from './creer-etudiant/creer-etudiant.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';

//definition de l'acceuil general de localhost:4200 
const routes: Routes = [
  {path: 'etudiants', component:EtudiantListComponent},
  {path: 'creer-etudiant', component:CreerEtudiantComponent},
  {path:'', redirectTo: 'etudiants', pathMatch:'full'},
  {path: 'update-etudiant/:id', component: UpdateEtudiantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
