import { Injectable } from '@angular/core';
import { persona } from '../models/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private static lstPersonas: persona[] = [];
  private personaMod: persona = new persona();

  getPersonas(): persona[] {
    this.getData().subscribe(
      (response) => {
        PersonaService.lstPersonas=response;
        return PersonaService.lstPersonas;
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );

    return PersonaService.lstPersonas;
  }

  setPersona(_persona: persona) {
    this.personaMod = _persona;
  }
  getPersona(): persona {
    return this.personaMod;
  }

  private URL: string = 'http://191.88.249.172:3000/Usuarios/';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(`${this.URL}`, { headers });
  }

  postData(data: persona): Observable<any> {
    return this.http.post(this.URL, data);
  }
}
