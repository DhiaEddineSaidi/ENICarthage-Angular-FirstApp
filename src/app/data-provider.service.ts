import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private host:string = 'http://localhost:3000'
  constructor(private http:HttpClient) { }
  getLocalFrontEndData(){
    return {
      nom: 'Saidi',
      prenom: 'DhiaEddine',
      age: 31,
      profession: 'Ingenieur Informatique',
      dateNaissance : new Date(2023,9,28),
      passions: ['football','musique']
    }
  }
  getLocalBackEndData(){
    return this.http.get(this.host+'/me')
  }
  updateLocalBackEndData(me:Object){
    return this.http.post(this.host+'/me',{me})
  }
}
