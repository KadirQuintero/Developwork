import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../Servicios/loalStorage/local-storage.service';
import { OrdenesService } from '../ordenes/ordenes.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(
    private router: Router,
    private serviceLocalStorage: LocalStorageService,
    private serviceO: OrdenesService
  ) {}
  Principal(): void {
    this.router.navigate(['user']);
    this.serviceO.SetView(true);
  }
  RegisterUser(): void {
    this.router.navigate(['user/personas']);
    this.serviceO.SetView(false);
  }

  Teams(): void {
    this.router.navigate(['user/teams']);
    this.serviceO.SetView(false);
  }

  Stats(): void {
    this.router.navigate(['user/stats']);
    this.serviceO.SetView(false);
  }

  Notifications(): void {
    this.router.navigate(['user/notification']);
    this.serviceO.SetView(false);
  }

  Information(): void {
    this.router.navigate(['user/information']);
    this.serviceO.SetView(false);
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
