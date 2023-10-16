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
    this.router.navigate(['/register']);
  }

  Teams(): void {
    this.router.navigate(['/teams']);
  }

  Stats(): void {
    this.router.navigate(['/stats']);
  }

  Notifications(): void {
    this.router.navigate(['/notification']);
  }

  Information(): void {
    this.router.navigate(['/information']);
  }

  LogOut(): void {
    this.router.navigate(['/login']);
  }

  MostrarBoton: boolean = false;
  VerBoton() {
    this.MostrarBoton = !this.MostrarBoton;
  }
}
