import { Component } from '@angular/core';
import { persona } from 'src/app/models/persona';
import { PersonaService } from '../persona.service';
import { estado } from 'src/app/models/estado';
import { EstadoserviceService } from 'src/app/Servicios/Estados/estadoservice.service';
import { rol } from 'src/app/models/rol';
import { RolserviceService } from 'src/app/Servicios/Roles/rolservice.service';
import { Router } from '@angular/router';
import { TeamservService } from 'src/app/Equipos/teamserv.service';
import { equipo } from 'src/app/models/equipo';

@Component({
  selector: 'app-modpersona',
  templateUrl: './modpersona.component.html',
  styleUrls: ['./modpersona.component.css'],
})

export class ModpersonaComponent {
  public persona: persona = new persona();
  verequipo: equipo[] = [];
  verestado: estado[] = [];
  verroles: rol[] = [];

  constructor(
    private servicePersona: PersonaService,
    private router: Router,
    private serviceteam: TeamservService,
    private serviceestado: EstadoserviceService,
    private rolService: RolserviceService
  ) {}

  modificar() {
    console.log(this.persona);
    this.servicePersona.modPersona(this.persona).subscribe();
    this.servicePersona.setPersona(new persona());
    this.router.navigate(['/user/personas']);
  }

  ngOnInit(): void {
    if (this.servicePersona.getPersona().id_usuario == '') {
      this.router.navigate(['/user/personas']);
    } else {
      this.persona = this.servicePersona.getPersona();
      this.serviceteam.getData().subscribe((Response: equipo[]) => {
        this.verequipo = Response;
      });

      this.serviceestado.getData().subscribe((Response: estado[]) => {
        this.verestado = Response;
      });
      this.rolService.getData().subscribe((Response: rol[]) => {
        this.verroles = Response;
      });
    }
  }
}
