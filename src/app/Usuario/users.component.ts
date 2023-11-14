import { Component, OnInit } from '@angular/core';
import { persona } from '../models/persona';
import { PersonaService } from '../personas/persona.service';

@Component({
  selector: 'app-admin',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class usersComponent implements OnInit{
  ngOnInit() {
  }
  constructor(private servipersona: PersonaService){

  }
}
