import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Person } from './back-end-communication/models/person';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private host: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
 
  getAllUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(this.host + '/users/')
  }
  getUserWithId(id:number) {
    return this.http.get(this.host + '/users/'+id)
  }
  updatePerson(me: Object) {
    return this.http.post(this.host + '/me', { me })
  }
}
