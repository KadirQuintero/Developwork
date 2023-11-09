import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JornadaserviceService {

  private URL: string = 'http://191.88.249.172:3000/Jornadas/';
  constructor(private http: HttpClient) {}
  getData(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(`${this.URL}`,{headers});
  }}
