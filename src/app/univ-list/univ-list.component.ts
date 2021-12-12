import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from '../universite';
import { UniversiteService } from '../universite.service';

@Component({
  selector: 'app-univ-list',
  templateUrl: './univ-list.component.html',
  styleUrls: ['./univ-list.component.css']
})
export class UnivListComponent implements OnInit {

  universites: Universite[];

  constructor(private universiteService:UniversiteService,
    private router:Router ) { 
    this.universites=[];
  }

  ngOnInit(): void {
    this.getUniv();
  }

  getUniv(){
    this.universiteService.getListUniv().subscribe(data=>this.universites=data);
  }

  updateUniv(id: number){
    this.router.navigate(['update-univ', id]);
  }


}
