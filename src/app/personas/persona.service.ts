import { Injectable } from '@angular/core';
import { persona } from '../models/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { LocalStorageService } from '../Servicios/loalStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private static lstPersonas: persona[] = [];
  private personaMod: persona = new persona();
  private personaLog: persona = new persona();
  private token: string = '';

  validToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(this.URL + 'checkSafe', {
      headers,
      responseType: 'text',
    });
  }

  //Esto no lo usas en ningun lao Lui
  getPersonas(): persona[] {
    this.getData().subscribe(
      (response) => {
        PersonaService.lstPersonas = response;
        return PersonaService.lstPersonas;
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
    return PersonaService.lstPersonas;
  }

  //se usa en modPersonaComponent
  setPersona(_persona: persona) {
    return (this.personaMod = _persona);
  }

  //Se usa en modPersonaComponent
  getPersona(): persona {
    return this.personaMod;
  }

  private URL: string = 'http://191.88.249.172:3000/Usuarios/';
  constructor(
    private http: HttpClient,
    private serviceLocalStorage: LocalStorageService
  ) {
    this.token = serviceLocalStorage.getItem('jwt');
  }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.URL}`, { headers });
  }

  postData(data: persona): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    console.log(headers);
    return this.http.post(this.URL, data, { headers });
  }

  login(data: persona): Observable<any> {
    return this.http
      .post(this.URL + 'login', data, { responseType: 'text' })
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud:', error);
          throw error; // Puedes manejar el error según tus necesidades
        })
      );
  }

  setPersonaLog(): Observable<any> {
    this.token = this.serviceLocalStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });

    return this.http.get(this.URL + 'usuario', { headers });
  }

    //Se usa en ModpersonaComponent
  modPersona(persona: persona): Observable<any> {
    this.token = this.serviceLocalStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.put(this.URL, persona, { headers });
  }

  chPass(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.put(this.URL + 'chpass', user, {
      headers, responseType: 'text',});
  }
}
