import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private host: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  getMe() {
    return this.http.get(this.host + '/me')
  }
  updateME(me: Object) {
    return this.http.post(this.host + '/me', { me })
  }
}
