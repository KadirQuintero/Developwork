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

  id_Equipo: string = '';
  nombre_equipo: string = '';
  descripcion: string = '';
  id_rol: rol = new rol();
  id_estado: estado = new estado();
  id_jornada: jornada = new jornada();

  AgregarEquipo() {
    const nuevoEquipo = {
      id_equipo: this.id_Equipo,
      nombre_equipo: this.nombre_equipo,
      descripcion: this.descripcion,
      rol: this.id_rol,
      estado: this.id_estado,
      jornada: this.id_jornada,
    };

    this.serviceteam.addEquipo(nuevoEquipo).subscribe(
      (equipo) => {
        console.log('Equipo agregado con éxito:', equipo);
        this.verequipo.push(nuevoEquipo);
      },
      (error) => {
        console.error('Error al agregar equipo:', error);
      }
    );
  }

  removeTeam(index: number) {}
}
