import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jornada } from 'src/app/models/jordanas';
import { LocalStorageService } from '../loalStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JornadaserviceService {
  private Jornadas: jornada[] =[];

  getEstado(){
    return this.Jornadas;
  }

  private URL: string = 'http://localhost:3000/Jornadas/';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.URL}`, { headers });
  }
}
