import { Injectable } from '@angular/core';
import { equipo } from '../models/equipo';
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

  getTeam(team: equipo) {
    return this.Teams;
  }
}
