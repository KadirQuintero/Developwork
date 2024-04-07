import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TeamservService } from '@/app/Services/teams/teamserv.service';
import { EstadoserviceService } from 'src/app/Services/Estados/estadoservice.service';
import { SordenesService } from 'src/app/Services/ordenes/sordenes.service';
import { equipo } from '@/app/interface/equipo';
import { estado } from '@/app/interface/estado';
import { ordenes_matenimiento } from '@/app/interface/ordenes_mantenimiento';
import { persona } from '@/app/interface/persona';
import { prioridad } from '@/app/interface/prioridad';
import { PersonaService } from 'src/app/Services/personas/persona.service';

@Component({
  selector: 'app-forden',
  templateUrl: './forden.component.html',
  styleUrls: ['./forden.component.css'],
})
export class FordenComponent {
  @Input() modorden: ordenes_matenimiento = new ordenes_matenimiento();
  @Output() mensajeCambiado = new EventEmitter<ordenes_matenimiento>();
  equipos: equipo[] = [];
  estados: estado[] = [];
  prioridades: prioridad[] = [
    {
      id_prioridad: '1',
      nombre_prioridad: 'Bajo',
    },
    {
      id_prioridad: '2',
      nombre_prioridad: 'Medio',
    },
    {
      id_prioridad: '3',
      nombre_prioridad: 'Urgente',
    },
  ];
  nuevo: boolean = false;
  administrativo: persona = new persona();
  cerrar() {
    this.mensajeCambiado.emit(new ordenes_matenimiento());
  }

  constructor(
    private sequipos: TeamservService,
    private sestados: EstadoserviceService,
    private spersonas: PersonaService,
    private sordenes: SordenesService
  ) {
    this.sequipos.getData().subscribe((Response) => {
      this.equipos = Response;
    });

    this.sestados.getData().subscribe((Response) => {
      this.estados = [
        {
          id_estado: '1',
          nombre: 'no iniciado',
        },
        {
          id_estado: '2',
          nombre: 'en curso',
        },
        {
          id_estado: '3',
          nombre: 'revision',
        },
        {
          id_estado: '4',
          nombre: 'finalizado',
        },
      ];
    });
    this.spersonas.setPersonaLog().subscribe((Response) => {
      this.administrativo = Response;
      if (this.modorden.idUser == '') {
        this.modorden.idUser = this.administrativo.id_user;
        this.nuevo = true;
      }
    });
  }

  agregar(): void {
    this.nuevo = !this.nuevo;
    this.modorden.idEquipo =
      this.equipos.find((x) => x.id_equipo == this.modorden.equipo.id_equipo) ||
      new equipo();
    this.modorden.estado =
      this.estados.find((x) => x.id_estado == this.modorden.estado.id_estado) ||
      new estado();
    this.modorden.prioridad =
      this.prioridades.find(
        (x) => x.id_prioridad == this.modorden.prioridad.id_prioridad
      ) || new prioridad();
    this.sordenes.createOrden(this.modorden).subscribe((response) => {
      console.log(response);
    },(error)=>{
      console.log(error);
    });
    this.cerrar();
  }

  // actualizar() {
  //   this.modorden.equipo =
  //     this.equipos.find((x) => x.id_equipo == this.modorden.equipo.id_equipo) ||
  //     new equipo();
  //   this.modorden.estado =
  //     this.estados.find((x) => x.id_estado == this.modorden.estado.id_estado) ||
  //     new estado();
  //   this.modorden.prioridad =
  //     this.prioridades.find(
  //       (x) => x.id_prioridad == this.modorden.prioridad.id_prioridad
  //     ) || new prioridad();
  //   this.sordenes.putOrden(this.modorden).subscribe((Response) => {});
  //   this.cerrar();
  // }
}
