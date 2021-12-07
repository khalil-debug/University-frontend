import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  etudiants:Etudiant[];

  constructor() { }

  ngOnInit(): void {
  }

}
