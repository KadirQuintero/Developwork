import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PersonaService } from '../personas/persona.service';
import { LocalStorageService } from './loalStorage/local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private serviceLocalStorage: LocalStorageService,
    private router: Router,
    private personaService: PersonaService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.serviceLocalStorage.getItem('jwt') != null &&
      this.serviceLocalStorage.getItem('jwt').length != 0
    ) {
      // Usuario autenticado, permite el acceso a la ruta
      return true;
    } else {
      // Usuario no autenticado, redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}
