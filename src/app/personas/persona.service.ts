import { Injectable } from '@angular/core';
import { persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private static lstPersonas:persona[]=[];
  private personaMod: persona= new persona();
  constructor() { }

  getPersonas():persona[]{
    return PersonaService.lstPersonas;
  }

  setPersona( _persona:persona){
    this.personaMod=_persona;
  }
  getPersona():persona{
    return this.personaMod;
  }

}
