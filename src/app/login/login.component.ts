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

  IniciarSesion(): void {
    this.PersonaService.login(this.usuario).subscribe(
      (response: string) => {
        // response ahora es una cadena que puedes usar como desees
        console.log('Token JWT:', response);
        if (response != null) {
          this.serviceLocalStorage.setItem('jwt', response);
          this.PersonaService.setPersonaLog();
          this.router.navigate(['/user']);
        }
        // ...haz algo con el token, como almacenarlo en localStorage
      },
      (error) => {
        console.error('Error durante el inicio de sesión:', error);
        // Mostrar un mensaje de error en la interfaz de usuario
      }
    );
  }

  ChangeType: boolean = true;
  viewpass() {
    this.ChangeType = !this.ChangeType;
  }
}
