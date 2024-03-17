import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '../../interface/equipo';
import { rol } from '../../interface/rol';
import { estado } from '../../interface/estado';
import { persona } from '../../interface/persona';
import { TeamservService } from '@/app/Services/teams/teamserv.service';
import { RolserviceService } from 'src/app/Services/Roles/rolservice.service';
import { EstadoserviceService } from 'src/app/Services/Estados/estadoservice.service';
import { PersonaService } from '../../Services/personas/persona.service';

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
  ) { }

  modificar() {
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
