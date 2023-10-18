import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //Btn_IniciarSesion manda al usuario a su vista
  constructor(private router: Router) {}
  IniciarSesion(): void {
    this.router.navigate(['/user']);
    }
}
