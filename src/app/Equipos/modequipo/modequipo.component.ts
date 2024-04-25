import { Component, OnInit } from '@angular/core';
import { equipo } from '@/app/Interface/equipo';
import { TeamservService } from '../../Services/teams/teamserv.service';
import { Router } from '@angular/router';
import { estado } from '@/app/Interface/estado';
import { EstadoserviceService } from 'src/app/Services/Estados/estadoservice.service';
import { rol } from '@/app/Interface/rol';
import { RolserviceService } from 'src/app/Services/Roles/rolservice.service';

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

  constructor(
    private router: Router,
    private serviceequipo: TeamservService,
    private serviceestado: EstadoserviceService,
    private rolService: RolserviceService
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
    }
  }
}
