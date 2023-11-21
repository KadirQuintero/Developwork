import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../models/persona';
import { PersonaService } from '../personas/persona.service';
import { LocalStorageService } from '../Servicios/loalStorage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  public usuario: persona = new persona();
  constructor(
    private router: Router,
    private serviceLocalStorage: LocalStorageService,
    private PersonaService: PersonaService
  ) {}

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  msgValidarEmail: boolean = false;

  ValidarCamp(value: string): boolean {
    return value.trim() !== '';
  }

  msgValidarCamp: boolean = false;

  IniciarSesion(): void {
    const { correo, contrasena } = this.usuario;
    if (correo !== undefined && !this.ValidarCamp(correo)
    || contrasena !== undefined && !this.ValidarCamp(contrasena)){
      this.msgValidarCamp = true; return;
    }
    else if (correo !== undefined &&  !this.validarEmail(correo)) {
      this.msgValidarEmail = true; return;
    } else {
      this.PersonaService.login(this.usuario).subscribe(
        (response: string) => {
          //console.log('Token JWT:', response);
          if (response != null) {
            this.serviceLocalStorage.setItem('jwt', response);
            this.PersonaService.setPersonaLog()/*.subscribe((response) => {console.log(response)})*/;
            this.router.navigate(['/user']);
          }},
        (error) => {console.error('Error durante el inicio de sesión:', error);
        }
      );
    }
  }

  ChangeType: boolean = true;
  viewpass() {
    this.ChangeType = !this.ChangeType;
  }
}
