import { Injectable } from '@angular/core';
import { equipo } from '../models/equipo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamservService {
  private Teams: equipo[] =
    [];

  addTeam(team: equipo) {
    this.Teams.push(team);
  }

  removeTeam(index: number) {
    this.Teams.splice(index, 1);
  }

  getTeam(/*team: equipo*/) {
    return this.Teams;
  }

  private URL: string = 'http://191.88.249.172:3000/Equipos/';
  constructor(private http: HttpClient) {}
  getData(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(`${this.URL}`,{headers});
  }
}
