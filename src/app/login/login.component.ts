import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  //Btn_IniciarSesion manda al usuario a su vista
  IniciarSesion(): void {
    this.router.navigate(['/user']);
  }

  //Muestra la contraseña con el checkbox
  ChangeType: boolean = true;
  viewpass() {
    this.ChangeType = !this.ChangeType;
  }
}
