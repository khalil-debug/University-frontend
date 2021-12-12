import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { CreerEtudiantComponent } from './creer-etudiant/creer-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { DeleteEtudiantComponent } from './delete-etudiant/delete-etudiant.component';
import { UnivListComponent } from './univ-list/univ-list.component';
import { CreerUnivComponent } from './creer-univ/creer-univ.component';
import { UpdateUnivComponent } from './update-univ/update-univ.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantListComponent,
    CreerEtudiantComponent,
    UpdateEtudiantComponent,
    DeleteEtudiantComponent,
    UnivListComponent,
    CreerUnivComponent,
    UpdateUnivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
