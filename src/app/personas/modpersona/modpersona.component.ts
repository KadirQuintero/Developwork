import { Component } from '@angular/core';
import { persona } from 'src/app/models/persona';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modpersona',
  templateUrl: './modpersona.component.html',
  styleUrls: ['./modpersona.component.css'],
})
export class ModpersonaComponent {
  persona: persona = new persona();
  constructor(private router: Router, private servicePersona: PersonaService) {
    this.persona = servicePersona.getPersona();
  }
  modificar() {
    this.servicePersona.setPersona(this.persona);
    this.router.navigate(['/user/personas']);
  }
}
