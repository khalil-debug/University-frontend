import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-creer-etudiant',
  templateUrl: './creer-etudiant.component.html',
  styleUrls: ['./creer-etudiant.component.css']
})
export class CreerEtudiantComponent implements OnInit {

  etud: Etudiant= new Etudiant();
  constructor(private etudiantService: EtudiantService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  enregistrement(){
    this.etudiantService.ajoutEtudiant(this.etud).subscribe (data =>{console.log(data);
        this.naviguer();
      },
      error=>console.log(error));
  }

  naviguer(){
    this.router.navigate(['etudiants']);
  }

  Ajout(){
    console.log(this.etud);
    this.enregistrement();
  }

}
