import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from '../universite';
import { UniversiteService } from '../universite.service';

@Component({
  selector: 'app-creer-univ',
  templateUrl: './creer-univ.component.html',
  styleUrls: ['./creer-univ.component.css']
})
export class CreerUnivComponent implements OnInit {

  uni: Universite=new Universite();
  constructor(private us: UniversiteService,
    private router:Router) { }

  ngOnInit(): void {
  }

  enregistrer(){
    this.us.ajoutUniv(this.uni).subscribe(data=>{
      console.log(data);
      this.naviguer();
    },error=>console.log(error));
  }
  naviguer(){
    this.router.navigate(['universites']);
  }

  Ajout(){
    console.log(this.uni);
    this.enregistrer();
  }

}
