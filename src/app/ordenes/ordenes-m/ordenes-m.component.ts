import { Component, OnInit } from '@angular/core';
import { TeamservService } from 'src/app/Equipos/teamserv.service';
import { SordenesService } from 'src/app/Servicios/ordenes/sordenes.service';
import { ordenes_matenimiento } from 'src/app/models/ordenes_mantenimiento';

@Component({
  selector: 'app-ordenes-m',
  templateUrl: './ordenes-m.component.html',
  styleUrls: ['./ordenes-m.component.css'],
})
export class OrdenesMComponent implements OnInit {
  ngOnInit(): void {
    this.sordenes.ordenes().subscribe((Response) => {
      this.ordenesP = Response;
    });
    this.sordenes.ordenesP().subscribe((Response) => {
      this.ordenesR = Response;
    });
  }
  modorden: ordenes_matenimiento = new ordenes_matenimiento();

  constructor(private sordenes: SordenesService) {
    this.modorden = this.sordenes.getOrden();
  }
  ordenesP: ordenes_matenimiento[] = [];
  ordenesR: ordenes_matenimiento[] = [];

  modOrden(ordenM: ordenes_matenimiento) {
    this.modorden = ordenM;
  }
  newOrden() {
    var fechaHoraActual = new Date();
    var año = fechaHoraActual.getFullYear();
    var mes = fechaHoraActual.getMonth() + 1; // Los meses comienzan desde cero, por lo que se suma 1
    var dia = fechaHoraActual.getDate();
    var horas = fechaHoraActual.getHours();
    var minutos = fechaHoraActual.getMinutes();
    var segundos = fechaHoraActual.getSeconds();

    var fechaHoraFormateada =
      año +
      this.pad(mes) +
      this.pad(dia) +
      this.pad(horas) +
      this.pad(minutos) +
      this.pad(segundos);
    console.log(fechaHoraFormateada);
    this.modorden = new ordenes_matenimiento();
    this.modorden.id_orden = 'O' + fechaHoraFormateada;
  }
  pad(numero: number): string {
    return numero < 10 ? '0' + numero.toString() : numero.toString();
  }
}
