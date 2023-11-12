import { Injectable } from '@angular/core';
import { equipo } from '../models/equipo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeamservService {
  private static ltsEquipos: equipo[] = [];
  private equipoMod: equipo = new equipo();
  private token: string = '';

  getEquipos(): equipo[] {
    this.getData().subscribe(
      (Response) => {
        console.log(Response);
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
    return TeamservService.ltsEquipos;
  }

  setEquipo(_equipo: equipo) {
    return (this.equipoMod = _equipo);
  }
  getEquipo(): equipo {
    return this.equipoMod;
  }

  private URL: string = 'http://191.88.249.172:3000/Equipos/';
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  /** POST: add a new hero to the database */
  addEquipo(equipo: equipo): Observable<any> {
       return this.http.post(this.URL, equipo)
  }

  removeTeam(index: number) {}
}

//CAMBIO NO REFREJADO
