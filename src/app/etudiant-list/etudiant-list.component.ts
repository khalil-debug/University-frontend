import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  etudiants:Etudiant[];

  constructor(private etudiantService: EtudiantService,
    private router : Router) { 
    this.etudiants=[];
  }

  ngOnInit(): void {
    this.getEtudiants();
  }
  private getEtudiants() {
    this.etudiantService.getEtudientList().subscribe(data =>
      {this.etudiants= data;}
    );
  }

  updateEtudiant(id: number){
    this.router.navigate(['update-etudiant', id]);
  }

}
