import { Component, OnInit } from '@angular/core';
import { equipo } from '../models/equipo';
import { elementAt } from 'rxjs';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  listaEquipos: equipo[] = [];
  constructor() {
    console.log('Soy tu puta madre');
  }
  ngOnInit(): void {
    fetch('../../assets/equipos.json')
      .then((response) => response.json())
      .then((json) => {
        json.forEach((Element: any) => {
          let marihuana = new equipo();
          marihuana.id_equipo = Element.id_equipo;
          marihuana.descripcion=Element.Descripcion;
          this.listaEquipos.push(marihuana);
        });
      });
  }
}
