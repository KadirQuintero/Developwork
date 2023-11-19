import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../Servicios/loalStorage/local-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(
    private router: Router,
    private serviceLocalStorage: LocalStorageService
  ) {}
  Principal(): void {
    this.router.navigate(['user']);
  }
  RegisterUser(): void {
    this.router.navigate(['user/personas']);
  }

  Teams(): void {
    this.router.navigate(['user/teams']);
  }

  Stats(): void {
    this.router.navigate(['user/stats']);
  }

  Notifications(): void {
    this.router.navigate(['user/notification']);
  }

  Information(): void {
    this.router.navigate(['user/information']);
  }

  LogOut(): void {
    this.serviceLocalStorage.removeAll();
    this.router.navigate(['/login']);
  }

  MostrarBoton: boolean = false;
  VerBoton() {
    this.MostrarBoton = !this.MostrarBoton;
  }
}
