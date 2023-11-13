import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private router: Router) {}
  RegisterUser(): void {
    this.router.navigate(['usuario/personas']);
  }

  Teams(): void {
    this.router.navigate(['usuario/equipos']);
  }

  Stats(): void {
    this.router.navigate(['usuario/estadisticas']);
  }

  Notifications(): void {
    this.router.navigate(['usuario/notificaciones']);
  }

  Information(): void {
    this.router.navigate(['usuario/informacion']);
  }

  LogOut(): void {
    this.router.navigate(['/login']);
  }

  MostrarBoton: boolean = false;
  VerBoton() {
    this.MostrarBoton = !this.MostrarBoton;
  }
}
