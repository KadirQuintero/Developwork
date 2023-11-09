import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '../../models/equipo';
import { TeamservService } from '../teamserv.service';
import { estado } from 'src/app/models/estado';
import { EstadoserviceService } from 'src/app/Servicios/Estados/estadoservice.service';
import { rol } from 'src/app/models/rol';
import { RolserviceService } from 'src/app/Servicios/Roles/rolservice.service';
import { jornada } from 'src/app/models/jordanas';
import { JornadaserviceService } from 'src/app/Servicios/Jornadas/jornadaservice.service';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  equipoSelect: equipo = new equipo();
  verequipo: equipo[] = [];
  verestado: estado[] = [];
  verroles: rol[] = [];
  verjornada: jornada[] = [];
  constructor(
    private router: Router,
    private serviceteam: TeamservService,
    private serviceestado: EstadoserviceService,
    private rolService: RolserviceService,
    private jornadaService: JornadaserviceService
  ) {
    this.verequipo = serviceteam.getEquipos();
    this.verestado = serviceestado.getEstado();
  }

  ngOnInit(): void {
    this.serviceteam.getData().subscribe((Response: equipo[]) => {
      this.verequipo = Response;
    });
    this.serviceestado.getData().subscribe((Response: estado[]) => {
      this.verestado = Response;
    });
    this.rolService.getData().subscribe((Response: rol[]) => {
      this.verroles = Response;
    });
    this.jornadaService.getData().subscribe((Response: jornada[]) => {
      this.verjornada = Response;
    });
  }

  modEquipo() {
    this.serviceteam.setEquipo(this.equipoSelect);
    this.router.navigate(['user/modEquipo']);
  }

  teams: equipo[] = [];
  idEquipo: string = '';
  nombre_equipo: string = '';
  descripcion: string = '';

  estados: estado[] = [];
  id_estado: string = '';
  nombre_estado: string = '';
  id_rol: string = '';
  id_jornada = '';

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
