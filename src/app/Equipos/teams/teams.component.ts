import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '../../models/equipo';
import { TeamservService } from '../teamserv.service';
import { estado } from 'src/app/models/estado';
import { EstadoserviceService } from 'src/app/Services/Estados/estadoservice.service';
import { rol } from 'src/app/models/rol';
import { RolserviceService } from 'src/app/Services/Roles/rolservice.service';
import { jornada } from 'src/app/models/jordanas';
import { JornadaserviceService } from 'src/app/Services/Jornadas/jornadaservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})

export class TeamsComponent implements OnInit {
  nuevoEquipo: equipo = new equipo();
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
  ) {}

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

    ValidarCamp(value: string): boolean {
    return value.trim() !== '';
  }
  msgValidarCamp: boolean = false;

  async AgregarEquipo() {
    const { nombre_equipo, descripcion } = this.nuevoEquipo;

    switch (true) {
      case !this.ValidarCamp(nombre_equipo):
      this.msgValidarCamp = true;
      break;

      case descripcion !== undefined && !this.ValidarCamp(descripcion):
      this.msgValidarCamp = true;
      break;

      default:
        this.serviceteam.addEquipo(this.nuevoEquipo).subscribe(
          (response) => { console.log('Equipo agregado con éxito:', response);
            this.verequipo.push(this.nuevoEquipo);
          },
          (error) => {console.error('Error al agregar equipo:', error);
          }
        );
    }
  }

  modEquipo() {
    console.log(this.equipoSelect);
    this.serviceteam.setEquipo(this.equipoSelect);
    this.router.navigate(['user/modEquipo']);
  }
}
