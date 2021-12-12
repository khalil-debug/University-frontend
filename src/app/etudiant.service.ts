import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Etudiant } from './etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseURL = "http://localhost:8080/Etudiant/getAllEtudiant";
  private ajoutURL = "http://localhost:8080/Etudiant/etudiant";
  constructor(private httpClient: HttpClient) { }
    getEtudientList(): Observable<Etudiant[]>{
      return this.httpClient.get<Etudiant[]>(`${this.baseURL}`);
    }
    ajoutEtudiant(etu: Etudiant): Observable<object>{
      return this.httpClient.post(`${this.ajoutURL}`, etu);
    }
    private rechURL = "http://localhost:8080/Etudiant/findEtudiant";
    getEtudiantByInscri(id: number): Observable<Etudiant>{
      return this.httpClient.get<Etudiant>(`${this.rechURL}/${id}`);
    }

    private modifURL = "http://localhost:8080/Etudiant/UpdateEtudiant";
    modifEtudiant(etu: Etudiant, id:number): Observable<object>{
      return this.httpClient.put(`${this.modifURL}/${id}`,etu);
    }

    private suppURL ="http://localhost:8080/Etudiant/deleteEtudiant";
    suppEtudiant(id:number):Observable<object>{
      return this.httpClient.delete(`${this.suppURL}/${id}`);
    }
  }
