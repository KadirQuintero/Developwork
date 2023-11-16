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

  ValidarLenght(value: string): boolean {
    return value.length <= 10;
  }

  ValidarCamp(value: string): boolean {
    return value.trim() !== '';
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async addPersona() {
    const { nombre, nombre2, apellido, apellido2, correo } = this.persona;
    if (!this.ValidarCamp(nombre) || !this.ValidarCamp(apellido)) {
      alert(`El campo ${!nombre ? 'Nombre' : 'Apellido'} no puede estar vacio.`); return;
    } else if (
      !this.ValidarLenght(nombre) || !this.ValidarLenght(nombre2) ||
      !this.ValidarLenght(apellido) || !this.ValidarLenght(apellido2)
    ) {
      alert(`Los campos de Nombre y Apellido no pueden pasarse de 10 caracteres.`); return;
    }
    if (correo !== undefined &&  !this.validarEmail(correo)) {
      alert('Por favor, ingresa un correo electrónico válido.'); return;
    } else {
      const postData = { key: 'value' }; // Reemplaza con tus datos
      this.personaSerive.postData(this.persona).subscribe(
        (response) => {console.log('Respuesta del servidor:', response);
        alert(`El usuario ${nombre} ${apellido} fue registrado con exito.`)
      },
        (error) => {console.error('Error en la solicitud:', error);
        }
      );
    }
  } //addPersona
}
