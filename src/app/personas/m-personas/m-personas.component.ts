import { Component,  OnInit } from '@angular/core';
import { persona } from '../../models/persona';
import { Router } from '@angular/router';
import { PersonaService } from '../persona.service';
@Component({
  selector: 'app-m-personas',
  templateUrl: './m-personas.component.html',
  styleUrls: ['./m-personas.component.css'],
})
export class MPersonasComponent implements OnInit {
  lstpersonas: persona[] = [];
  personaSelect:persona= new persona();
  constructor(private router: Router,private servicepersona:PersonaService) {
    this.lstpersonas=servicepersona.getPersonas();

  }

  ngOnInit(): void {
    fetch('../../assets/personas.json')
      .then((Response) => Response.json())
      .then((data) => {
        data.forEach((Element: persona) => {
          this.lstpersonas.push(Element);
        });
        this.lstpersonas.forEach((Element: persona) => {
          console.log(Element);
        });
      });
  }

  register(): void {
    console.log("checkout ")
    this.router.navigate(['user/register']);
  }
  modPersona(){
    this.servicepersona.setPersona(this.personaSelect);
    this.router.navigate(['user/modPersona']);
  }
}
