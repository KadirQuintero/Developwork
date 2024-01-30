import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../Services/loalStorage/local-storage.service';
import { PersonaService } from '../../personas/persona.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    private router: Router,
    private serviceLocalStorage: LocalStorageService,
    private PersonaS: PersonaService
  ) {}

  validarAdmin: boolean = false;
  validarOpera: boolean = false;

  private validarSegunIdRol(): void {
    const id_rol_sub = this.PersonaS.setPersonaLog().subscribe((response: any) => {
      console.log('La Id_Rol que trae es : ' + id_rol_sub);
      const id_rol = response.rol.id_rol;
      if (id_rol === '5') {
        this.validarAdmin = true;
        console.log('El rol es Administrativo');
      } else if (id_rol === '9') {
        console.log('El rol es operativo');
        this.validarOpera = true;
      }
    });
  }

  ngOnInit() {
    this.validarSegunIdRol();
  }

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
