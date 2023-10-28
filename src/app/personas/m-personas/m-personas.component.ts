import { Component, OnInit } from '@angular/core';
import { persona } from '../../models/persona';
import { Router } from '@angular/router';
@Component({
  selector: 'app-m-personas',
  templateUrl: './m-personas.component.html',
  styleUrls: ['./m-personas.component.css'],
})
export class MPersonasComponent implements OnInit {
  lstpersonas: persona[] = [];
  constructor(private router: Router) {}
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
    this.router.navigate(['user/register']);
  }
}
