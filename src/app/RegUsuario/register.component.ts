import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../models/persona';
import { equipo } from '../models/equipo';
import { estado } from '../models/estado';
import { rol } from '../models/rol';
import { TeamservService } from '../Equipos/teamserv.service';
import { EstadoserviceService } from '../Services/Estados/estadoservice.service';
import { RolserviceService } from '../Services/Roles/rolservice.service';
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

  ValidarLenght(value: string): boolean {
    return value.length <= 10;
  }
  msgValidarLenght: boolean = false;

  ValidarCamp(value: string): boolean {
    return value.trim() !== '';
  }
  msgValidarCamp: boolean = false;

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  msgValidarEmail: boolean = false;

  async addPersona() {
    const { nombre, nombre2, apellido, apellido2, correo } = this.persona;

    switch (true) {
      case !(this.ValidarCamp(nombre) && this.ValidarCamp(apellido)):
        this.msgValidarCamp = true;
        break;

      case !(
        this.ValidarLenght(nombre) &&
        this.ValidarLenght(nombre2) &&
        this.ValidarLenght(apellido) &&
        this.ValidarLenght(apellido2)
      ):
        this.msgValidarLenght = true;
        break;

      case correo !== undefined && !this.validarEmail(correo):
        this.msgValidarEmail = true;
        break;

      default:
        const postData = { key: 'value' }; // Reemplaza con tus datos
        this.personaSerive.postData(this.persona).subscribe(
          (response) => {
            console.log('Respuesta del servidor:', response);
            alert(`El usuario ${nombre} ${apellido} fue registrado con éxito.`);
          },
          (error) => {
            console.error('Error en la solicitud:', error);
          }
        );
    }
  }
}
