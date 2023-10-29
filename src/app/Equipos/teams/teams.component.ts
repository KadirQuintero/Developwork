import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '../../models/equipo';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {

  Formteam(): void{
    this.router.navigate(['user/teams/formteam']);
  }

  verequipo: equipo[] = [];
  constructor(private router: Router) {}
  ngOnInit(): void {
    fetch('../../assets/equipos.json')
      .then((Response) => Response.json())
      .then((data) => {
        data.forEach((Element: equipo) => {
          this.verequipo.push(Element);
        });
        this.verequipo.forEach((Element: equipo) => {
          console.log(Element);
        });
      });
  }
}
