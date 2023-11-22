import { Component, OnInit } from '@angular/core';
import { equipo } from 'src/app/models/equipo';
import { TeamservService } from '../teamserv.service';
import { Router } from '@angular/router';
import { estado } from 'src/app/models/estado';
import { EstadoserviceService } from 'src/app/Servicios/Estados/estadoservice.service';
import { rol } from 'src/app/models/rol';
import { RolserviceService } from 'src/app/Servicios/Roles/rolservice.service';
import { jornada } from 'src/app/models/jordanas';
import { JornadaserviceService } from 'src/app/Servicios/Jornadas/jornadaservice.service';

@Component({
  selector: 'app-modequipo',
  templateUrl: './modequipo.component.html',
  styleUrls: ['./modequipo.component.css'],
})
export class ModequipoComponent {
  equipo: equipo = new equipo();
  verestado: estado[] = [];
  verroles: rol[] = [];
  verequipo: equipo[] = [];
  verjornada: jornada[] = [];

  constructor(
    private router: Router,
    private serviceequipo: TeamservService,
    private serviceestado: EstadoserviceService,
    private rolService: RolserviceService,
    private jornadaService: JornadaserviceService
  ) {}

  modificarequipo() {
    console.log('Modequipo, Modificarequipo, entro');
    this.serviceequipo.modEquipo(this.equipo).subscribe();
    console.log('paso el modEquipo.subscribe');

    this.serviceequipo.setEquipo(new equipo());
    console.log('paso el setequipo new equipo');

    this.router.navigate(['user/teams']);
  }

  ngOnInit(): void {
    if (this.serviceequipo.getEquipo().id_equipo == '') {
      this.router.navigate(['/user/teams']);
    } else {
      this.equipo = this.serviceequipo.getEquipo();
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
  }
}
