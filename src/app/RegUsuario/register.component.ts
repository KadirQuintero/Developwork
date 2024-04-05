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

  constructor(
    private serviceteam: TeamservService,
    private serviceestado: EstadoserviceService,
    private rolService: RolserviceService,
    private personaSerive: PersonaService
  ) {}

  ngOnInit(): void {
    // this.serviceteam.getData().subscribe((Response: equipo[]) => {
    //   this.verequipo = Response;
    // });
    // this.serviceestado.getData().subscribe((Response: estado[]) => {
    //   this.verestado = Response;
    // });
    this.rolService.getData().subscribe((Response: any) => {
      this.verroles = Response.data.roles
      console.log("Data: ", this.verroles)
    });
    let arrayNormal = this.verroles.map(objeto => objeto.id_rol)
    console.log("Array normal: ", arrayNormal)
  }

  objectValues(obj: any) {
    return Object.values(obj);
  }

  //Valida que el campo no este vacio
  validateField(value: string): boolean {
    return value.trim() !== '';
  }

  //Valida que la longitud del nombre sea menor o igual 15
  validateLenght(value: string): boolean {
    return value.length <= 15;
  }

  //Valida el formato del correo que se ingresa
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  //genera una contraseña aleatoria
  randomPassword(longitud: number): string {
    //Constante que almacena los caracteres que contrendra la contraseña
    const caracteres: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';

    //Obtenemos la longitud de los caracteres proporcionados
    const caractereslength = caracteres.length;

    //Declaro una variable constraseña
    let password: string = '';

    //Se crea un array que será del tamaño de la longitud de la contraseña
    const array = new Uint32Array(longitud);

    //Se usa el objeto crypto del navegador para generar valores aleatorios y cargar el 'array' con ellos
    window.crypto.getRandomValues(array);

    /*Iteramos sobre cada elemento del 'array' concatenando los valores almacenados en el 'array'.
    array[i] % caracteresLength devuelve un índice aleatorio dentro del rango de caracteres permitido,
    utilizando el operador módulo %.*/
    for (let i = 0; i < longitud; i++) {
      password += caracteres[array[i] % caractereslength];
    }

    //Retornamos la contraseña
    return password;
  }

  async addPersona() {
    const { nombre, nombre2, apellido, apellido2, correo } = this.persona;

    if (!(this.validateField(nombre) && this.validateField(apellido))) {
      // this.msgValidarCamp = true;
      alert('Ingrese minimo un nombre y un apellido');
      return;
    }

    if (
      !(
        this.validateLenght(nombre) &&
        this.validateLenght(nombre2) &&
        this.validateLenght(apellido) &&
        this.validateLenght(apellido2)
      )
    ) {
      alert('Los nombres y apellidos no pueden ser mayores a 10 caracteres');
      return;
    }

    if (correo !== undefined && !this.validateEmail(correo)) {
      alert('Formato de correo incorrecto');
      return;
    }

    this.persona.contrasena = this.randomPassword(10);
    this.persona.rol.id_rol = '2';
    this.persona.estado.id_estado = '2';

    console.log('La persona que mando: ', this.persona);
    // const postData = { key: 'value' }; // Reemplaza con tus datos
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
