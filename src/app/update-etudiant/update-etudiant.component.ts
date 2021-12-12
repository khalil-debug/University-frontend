import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {

  inscri: number= 1;
  etud: Etudiant= new Etudiant();
  constructor(private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.inscri=this.route.snapshot.params['id'];
    this.etudiantService.getEtudiantByInscri(this.inscri).subscribe(data=>{
      console.log(data);
      this.etud=data;

    }, error => console.log(error))
  }

  enregistrement(){
    this.etudiantService.modifEtudiant(this.etud, this.inscri).subscribe (data =>{console.log(data);
        this.naviguer();
      },
      error=>console.log(error));
  }

  naviguer(){
    this.router.navigate(['etudiants']);
  }

  modifier(){
    console.log(this.etud);
    this.enregistrement();
  }

}
