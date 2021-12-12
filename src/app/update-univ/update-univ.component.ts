import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from '../universite';
import { UniversiteService } from '../universite.service';

@Component({
  selector: 'app-update-univ',
  templateUrl: './update-univ.component.html',
  styleUrls: ['./update-univ.component.css']
})
export class UpdateUnivComponent implements OnInit {

  code:number=0;
  univ: Universite= new Universite()

  constructor(private universiteService: UniversiteService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.code=this.route.snapshot.params['id'];
    this.universiteService.getUnivByCode(this.code).subscribe(data=>{
      console.log(data);
      this.univ=data;
    }, error=>console.log(error));
  }

  enregistrement(){
    this.universiteService.modifUniv(this.univ, this.code).subscribe(data =>{
        console.log(data);
        this.naviguer();
      },
      error=>console.log(error));
  }

  naviguer(){
    this.router.navigate(['universites']);
  }

  modif(){
    console.log(this.univ);
    this.enregistrement();
  }
}
