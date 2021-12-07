import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Etudiant } from './etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseURL = "http://localhost:8080/Etudiant/getAllEtudiant";
  constructor(private httpClient: HttpClient) { }
    getEtudientList(): Observable<Etudiant[]>{
      return this.httpClient.get<Etudiant[]>(`${this.baseURL}`);
    }
  }
