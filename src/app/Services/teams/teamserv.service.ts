import { Injectable } from '@angular/core';
import { equipo } from '@/app/interface/equipo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { LocalStorageService } from '../loalStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TeamservService {
  private static ltsEquipos: equipo[] = [];
  private equipoMod: equipo = new equipo();
  private token: string = '';

  /*getEquipos(): equipo[] {
    this.getData().subscribe(
      (response) => {
        TeamservService.ltsEquipos = response;
        return TeamservService.ltsEquipos;
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
    return TeamservService.ltsEquipos;
  }*/

  //se usa en modEquipoComponent
  setEquipo(_equipo: equipo) {
    return (this.equipoMod = _equipo);
  }

  //se usa en modEquipoComponent
  getEquipo(): equipo {
    return this.equipoMod;
  }

  private URL: string = 'http://191.88.249.172:3000/Equipos/';
  constructor(
    private http: HttpClient,
    private serviceLocalStorage: LocalStorageService
  ) {
    this.token = this.serviceLocalStorage.getItem('jwt');
  }

  addEquipo(equipo: equipo): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.post(`${this.URL}`, equipo, { headers });
  }

  postData(data: equipo): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.post(this.URL, data, { headers });
  }

  modEquipo(equipo: equipo): Observable<any> {
    this.token = this.serviceLocalStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    console.log(headers);
    return this.http.put(this.URL, equipo, { headers, responseType: 'text' });
  }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.URL}`, { headers });
  }
}
