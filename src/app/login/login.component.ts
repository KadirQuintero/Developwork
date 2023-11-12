import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../models/persona';
import { AuthService } from '../auth.service';
import { PersonaService } from '../personas/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public usuario: persona = new persona();
  constructor(private router: Router, private servicePersona: AuthService ,private PersonaService: PersonaService) {}
  IniciarSesion(): void {
    this.servicePersona.isAutenticathed(this.usuario).subscribe((Response) => {
      if (Response != null) {
        this.PersonaService.setPersonaLog(Response);
        this.router.navigate(['/user']);
      }
    });
  }

  //Muestra la contraseña con el checkbox
  ChangeType: boolean = true;
  viewpass() {
    this.ChangeType = !this.ChangeType;
  }
}
