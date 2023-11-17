import { Component, Input } from '@angular/core';
import { ordenes_matenimiento } from 'src/app/models/ordenes_mantenimiento';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent {
  @Input() orden :ordenes_matenimiento= new ordenes_matenimiento();
  constructor(){
    console.log(this.orden);
  }
}
