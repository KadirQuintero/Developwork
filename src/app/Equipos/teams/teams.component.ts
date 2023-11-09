import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '../../models/equipo';
import { TeamservService } from '../teamserv.service';
import { estado } from 'src/app/models/estado';
import { EstadoserviceService } from 'src/app/Servicios/Estados/estadoservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  verequipo: equipo[] = [];
  verestado: estado[] = [];
  constructor(
    private router: Router,
    private serviceteam: TeamservService,
    private serviceestado: EstadoserviceService
  ) {
    this.verequipo = serviceteam.getTeam();
    this.verestado = serviceestado.getEstado();
  }

  ngOnInit(): void {
    this.serviceteam.getData().subscribe((Response: equipo[]) => {
      this.verequipo = Response;
    });

    this.serviceestado.getData().subscribe((Response: estado[]) => {
      this.verestado = Response;
    })

    /* fetch('../../assets/equipos.json')
      .then((Response) => Response.json())
      .then((data) => {
        data.forEach((Element: equipo) => {
          this.verequipo.push(Element);
        });
        this.verequipo.forEach((Element: equipo) => {
          console.log(Element);
        });
      });
    */
  }

  teams: equipo[] = [];
  idEquipo: string = '';
  nombre_equipo: string = '';
  descripcion: string = '';

  estados: estado[] = [];
  id_estado: string = '';
  nombre_estado: string='';

  private safe() {
    this.idEquipo = '';
    this.nombre_equipo = '';
    this.descripcion = '';
  }

  private safe1() {
    /*this.teams = this.teamservice.getTeam({
      id_equipo: this.idEquipo,
      nombre_equipo: this.nombre_equipo,
      descripcion: this.descripcion
    })*/
  }

  /*constructor(private teamservice: TeamservService) {
    /*this.safe1();
  }*/

  addTeam() {
    /*if (this.idEquipo && this.nombre_equipo && this.descripcion) {
      this.teamservice.addTeam({
        id_equipo: this.idEquipo,
        nombre_equipo: this.nombre_equipo,
        descripcion: this.descripcion,
      });
      this.safe();
      this.safe1();
    }*/
  }

  removeTeam(index: number) {
    /*this.teamservice.removeTeam(index);
    this.safe1();*/
  }
}
