import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '@/app/interface/equipo';
import { TeamservService } from '../../Services/teams/teamserv.service';
import { estado } from '@/app/interface/estado';
import { EstadoserviceService } from 'src/app/Services/Estados/estadoservice.service';
import { rol } from '@/app/interface/rol';
import { RolserviceService } from 'src/app/Services/Roles/rolservice.service';

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

  constructor(
    private router: Router,
    private serviceteam: TeamservService,
    private serviceestado: EstadoserviceService,
    private rolService: RolserviceService,
  ) {}

  ngOnInit(): void {
    // this.serviceteam.getData().subscribe((Response: equipo[]) => {
    //   this.verequipo = Response;
    // });
    this.serviceestado.getData().subscribe((Response: any) => {
      this.verestado = Response.data.estados;
      console.log("Roles: ",this.verestado)
    });
    // this.rolService.getData().subscribe((Response: rol[]) => {
    //   this.verroles = Response;
    // });
  }

    ValidarCamp(value: string): boolean {
    return value.trim() !== '';
  }
  msgValidarCamp: boolean = false;

  async AgregarEquipo() {
    this.nuevoEquipo.id_equipo = '92734'

    const { nombre_equipo, descripcion } = this.nuevoEquipo;

    // switch (true) {
    //   case !this.ValidarCamp(nombre_equipo):
    //   this.msgValidarCamp = true;
    //   break;

    //   case descripcion !== undefined && !this.ValidarCamp(descripcion):
    //   this.msgValidarCamp = true;
    //   break;

    //   default:

    // }

    console.log(this.nuevoEquipo)
    this.serviceteam.addEquipo(this.nuevoEquipo).subscribe(
      (response) => { console.log('Equipo agregado con éxito:', response);
        alert("Nuevo equipo agregado con exito")
        this.verequipo.push(this.nuevoEquipo);
      },
      (error) => {console.error('Error al agregar equipo:', error);
      }
    );
  }

  modEquipo() {
    console.log(this.equipoSelect);
    this.serviceteam.setEquipo(this.equipoSelect);
    this.router.navigate(['user/modEquipo']);
  }
}
