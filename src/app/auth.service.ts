import { Injectable } from '@angular/core';
import { PersonaService } from './personas/persona.service';
import { persona } from './models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario: persona = new persona();

  constructor(private personaService: PersonaService) {}

  isAutenticathed(Usuario: persona): Observable<persona> {
   return this.personaService.login(Usuario);
  }
}
