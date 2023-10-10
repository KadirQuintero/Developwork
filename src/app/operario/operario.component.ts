import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operario',
  templateUrl: './operario.component.html',
  styleUrls: ['./operario.component.css']
})
export class OperarioComponent implements OnInit {
  nombre: string="";
  email: string="";

  ngOnInit(): void {
    this.nombre = 'Luis Carretero';
    this.email = 'lcarreteroballesteros@unicesar.edu.co';
  }
}
