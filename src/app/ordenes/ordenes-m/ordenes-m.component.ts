import { Component, OnInit } from '@angular/core';
import { ordenes_matenimiento } from 'src/app/models/ordenes_mantenimiento';
import { OrdenesService } from '../ordenes.service';

@Component({
  selector: 'app-ordenes-m',
  templateUrl: './ordenes-m.component.html',
  styleUrls: ['./ordenes-m.component.css']
})
export class OrdenesMComponent implements OnInit {
  ngOnInit(): void {
    this.ordenesP=this.ordenesS.ordenes();
    this.ordenesR=this.ordenesS.ordenes();
    this.ordenesH=this.ordenesS.ordenes();

  }
  constructor(
    private ordenesS: OrdenesService
  ){}
  ordenesP:ordenes_matenimiento[]=[];
  ordenesR:ordenes_matenimiento[]=[];
  ordenesH:ordenes_matenimiento[]=[];

}
