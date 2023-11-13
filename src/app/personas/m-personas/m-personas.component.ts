import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../../models/persona';
import { PersonaService } from '../persona.service';
@Component({
  selector: 'app-m-personas',
  templateUrl: './m-personas.component.html',
  styleUrls: ['./m-personas.component.css'],
})
export class MPersonasComponent implements OnInit {
  lstpersonas: persona[] = [];
  personaSelect: persona = new persona();
  constructor(private router: Router, private servicepersona: PersonaService) {
  }

  ngOnInit(): void {
    this.servicepersona.getData().subscribe((Response: persona[]) => {
      this.lstpersonas = Response;
    });
  }
  register(): void {
    console.log('checkout ');
    this.router.navigate(['user/register']);
  }
  modPersona() {
    console.log(this.personaSelect);
    this.servicepersona.setPersona(this.personaSelect);
    this.router.navigate(['user/modPersona']);
  }
}
