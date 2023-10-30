import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamservService {
  private Teams: { idEquipo: string; nombre: string; descripcion: string }[] =
    [];

  addTeam(team: { idEquipo: string; nombre: string; descripcion: string }) {
    this.Teams.push(team);
  }

  removeTeam(index: number) {
    this.Teams.splice(index, 1);
  }

  getTeam(team: { idEquipo: string; nombre: string; descripcion: string }) {
    return this.Teams;
  }
}
