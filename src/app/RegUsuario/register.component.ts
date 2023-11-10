import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../models/persona';
import { equipo } from '../models/equipo';
import { estado } from '../models/estado';
import { rol } from '../models/rol';
import { TeamservService } from '../Equipos/teamserv.service';
import { EstadoserviceService } from '../Servicios/Estados/estadoservice.service';
import { RolserviceService } from '../Servicios/Roles/rolservice.service';
import { PersonaService } from '../personas/persona.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class registerComponent {
  persona: persona = new persona();
  verequipo: equipo[] = [];
  verestado: estado[] = [];
  verroles: rol[] = [];
  constructor(
    private router: Router,
    private serviceteam: TeamservService,
    private serviceestado: EstadoserviceService,
    private rolService: RolserviceService,
    private personaSerive: PersonaService
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
  }
  async addPersona() {
    const postData = { key: 'value' }; // Reemplaza con tus datos
    this.personaSerive.postData(this.persona).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
