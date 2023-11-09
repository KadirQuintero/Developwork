import { Injectable } from '@angular/core';
import { equipo } from '../models/equipo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { estado } from '../models/estado';

@Injectable({
  providedIn: 'root',
})
export class TeamservService {
  private static ltsEquipos: equipo[] = [];
  private equipoMod: equipo = new equipo();

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

  setEquipo(_equipo: equipo){
    return this.equipoMod = _equipo;
  }
  getEquipo(): equipo{
    return this.equipoMod;
  }

  private URL: string = 'http://191.88.249.172:3000/Equipos/';
  constructor(private http: HttpClient) {}
  getData(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(`${this.URL}`,{headers});
  }

  addTeam(team: equipo) {
    /*this.ltsEquipos.push(team);*/
  }

  removeTeam(index: number) {
    /*this.ltsEquipos.splice(index, 1);*/
  }
}
