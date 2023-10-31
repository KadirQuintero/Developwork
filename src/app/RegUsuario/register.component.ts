import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../models/persona';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class registerComponent {
  persona:persona=new persona();

  constructor(private router: Router) {}


  async addPersona(){
    try {
      const response = await fetch('../../assets/personas.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.persona)
      });
      
      if (response.ok) {
        console.log('Persona agregada correctamente.');
      } else {
        console.error('Error al agregar persona:', response.statusText);
      }
      
      console.log(this.persona);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
    console.log(this.persona)
  }
}
