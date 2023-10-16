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
<<<<<<< HEAD
    this.router.navigate(['/user']);
  }

  //Muestra la contraseña con el checkbox
  ChangeType: boolean = true;
  viewpass() {
    this.ChangeType = !this.ChangeType;
  }
=======
    this.router.navigate(['/admin']);
    }
>>>>>>> Revert "no quiero subir este commit"
}
