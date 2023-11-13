import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../personas/persona.service';
import { persona } from '../models/persona';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent {
  personalog: persona = new persona();
  constructor(private router: Router, private personaService: PersonaService) {
    this.personalog = this.personaService.getPersonalog();
  }
  CambContra(): void {
    this.router.navigate(['usuario/cambContraseña']);
  }
}
