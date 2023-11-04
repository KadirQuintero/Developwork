import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '../../models/equipo';
import { TeamservService } from '../teamserv.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  verequipo: equipo[] = [];
  /*constructor(private router: Router) {}*/
  ngOnInit(): void {
    fetch('../../assets/equipos.json')
      .then((Response) => Response.json())
      .then((data) => {
        data.forEach((Element: equipo) => {
          this.verequipo.push(Element);
        });
        this.verequipo.forEach((Element: equipo) => {
          console.log(Element);
        });
      });
  }

  teams: { idEquipo: string; nombre: string; descripcion: string }[] = [];
  idEquipo: string = '';
  nombre: string = '';
  descripcion: string = '';

  private safe(){
    this.idEquipo = '';
    this.nombre = '';
    this.descripcion = '';
  }

  private safe1(){
    this.teams = this.teamservice.getTeam({
      idEquipo: this.idEquipo,
      nombre: this.nombre,
      descripcion: this.descripcion,
    })
  }

  constructor(private teamservice: TeamservService) {
    this.safe1();
  }

  addTeam() {
    if (this.idEquipo && this.nombre && this.descripcion) {
      this.teamservice.addTeam({
        idEquipo: this.idEquipo,
        nombre: this.nombre,
        descripcion: this.descripcion,
      });
      this.safe();
      this.safe1();
    }
  }

  removeTeam(index: number) {
    this.teamservice.removeTeam(index);
    this.safe1();
  }
}
