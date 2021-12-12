import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Universite } from './universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private httpClient: HttpClient) {  }
  private baseURL="http://localhost:8080/Universite/getAllUniversite";
  getListUniv(): Observable<Universite[]>{
    return this.httpClient.get<Universite[]>(`${this.baseURL}`);
  }
  private ajoutURL="http://localhost:8080/Universite/universite";
  ajoutUniv(uni: Universite): Observable<object>{
    return this.httpClient.post(`${this.ajoutURL}`, uni);
  }
  private rechURL="http://localhost:8080/Universite/findUniversite";
  getUnivByCode(id: number): Observable<Universite>{
    return this.httpClient.get<Universite>(`${this.rechURL}/${id}`);
  }

  private modifURL = "http://localhost:8080/Universite/UpdateUniversite";
    modifUniv(uni: Universite, id:number): Observable<object>{
      return this.httpClient.put(`${this.modifURL}/${id}`,uni);
    }


}
