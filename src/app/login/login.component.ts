import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '@/app/interface/persona';
import { PersonaService } from '../Services/personas/persona.service';
import { LocalStorageService } from '../Services/loalStorage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  public usuario: persona = new persona();
  msgValidarEmail: boolean = false;
  msgValidarCamp: boolean = false;
  ChangeType: boolean = true;

  constructor(
    private router: Router,
    private serviceLocalStorage: LocalStorageService,
    private PersonaService: PersonaService
  ) {}

  viewpass() {
    this.ChangeType = !this.ChangeType;
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  ValidarCamp(value: string): boolean {
    return value.trim() !== '';
  }

  IniciarSesion(): void {
    const { correo, contrasena } = this.usuario;

    if (correo !== undefined && !this.ValidarCamp(correo)
    || contrasena !== undefined && !this.ValidarCamp(contrasena)){
      this.msgValidarCamp = true; return;
    }

    if (correo !== undefined &&  !this.validarEmail(correo)) {
      this.msgValidarEmail = true; return;
    }

    this.PersonaService.login(this.usuario).subscribe(
      (response: string) => {
        console.log('Token JWT:', response);
        if (response != null) {
          this.serviceLocalStorage.setItem('jwt', response);
          this.PersonaService.setPersonaLog();
          this.router.navigate(['/user']);
        }},
      (error) => {console.error('Error durante el inicio de sesión:', error);
      }
    );
  }
}
