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
        console.log(response);
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

  private URL: string = 'http://localhost:8080/Usuarios/';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(`${this.URL}`, { headers });
  }
}
