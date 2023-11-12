import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { persona } from './models/persona';
import { PersonaService } from './personas/persona.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private personaService:PersonaService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.personaService.getPersonalog().id_usuario!='') {
      // Usuario autenticado, permite el acceso a la ruta
      return true;
    } else {
      // Usuario no autenticado, redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }

}