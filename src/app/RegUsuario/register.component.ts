import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { persona } from '../interface/persona';
import { equipo } from '../interface/equipo';
import { estado } from '../interface/estado';
import { rol } from '../interface/rol';
import { TeamservService } from '../Services/teams/teamserv.service';
import { EstadoserviceService } from '../Services/Estados/estadoservice.service';
import { RolserviceService } from '../Services/Roles/rolservice.service';
import { PersonaService } from '../Services/personas/persona.service';

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
  // msgValidarLenght: boolean = false;
  // msgValidarCamp: boolean = false;
  // msgValidarEmail: boolean = false;

  constructor(
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

  ValidarCamp(value: string): boolean {
    return value.trim() !== '';
  }

  ValidarLenght(value: string): boolean {
    return value.length <= 10;
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async addPersona() {
    const { nombre, nombre2, apellido, apellido2, correo } = this.persona;
    let { contrasena } = this.persona;

    if (!(this.ValidarCamp(nombre) && this.ValidarCamp(apellido))) {
      // this.msgValidarCamp = true;
      alert('Ingrese minimo un nombre y un apellido');
      return;
    }

    if (
      !(
        this.ValidarLenght(nombre) &&
        this.ValidarLenght(nombre2) &&
        this.ValidarLenght(apellido) &&
        this.ValidarLenght(apellido2)
      )
    ) {
      // this.msgValidarLenght = true;
      alert('Los campos no pueden puerar los 10 caracteres');
      return;
    }

    if (correo !== undefined && !this.validarEmail(correo)) {
      // this.msgValidarEmail = true;
      alert('Formato de correo incorrecto');
      return;
    }

    function generarcontraseña(longitud: number): string {
      //Constante que almacena los caracteres que contrendra la contraseña
      const caracteres: string =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
      //Obtenemos la longitud de los caracteres proporcionados
      const caractereslength = caracteres.length;

      //Declaro una variable constraseña
      let contraseña: string = '';
      //Se crea un array que será del tamaño de la longitud de la contraseña
      const array = new Uint32Array(longitud);
      //Se usa el objeto crypto del navegador para generar valores aleatorios y cargar el 'array' con ellos
      window.crypto.getRandomValues(array);

      /*Iteramos sobre cada elemento del 'array' concatenando los valores almacenados en el 'array'.
      array[i] % caracteresLength devuelve un índice aleatorio dentro del rango de caracteres permitido,
      utilizando el operador módulo %.*/
      for (let i = 0; i < longitud; i++) {
        contraseña += caracteres[array[i] % caractereslength];
      }

      //Retornamos la contraseña
      return contraseña;
    }

    contrasena = generarcontraseña(10);

    //console.log(nombre, apellido, correo, contrasena)

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
