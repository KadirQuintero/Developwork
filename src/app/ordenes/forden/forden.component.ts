import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TeamservService } from 'src/app/Equipos/teamserv.service';
import { EstadoserviceService } from 'src/app/Servicios/Estados/estadoservice.service';
import { SordenesService } from 'src/app/Servicios/ordenes/sordenes.service';
import { equipo } from 'src/app/models/equipo';
import { estado } from 'src/app/models/estado';
import { ordenes_matenimiento } from 'src/app/models/ordenes_mantenimiento';
import { persona } from 'src/app/models/persona';
import { prioridad } from 'src/app/models/prioridad';
import { PersonaService } from 'src/app/personas/persona.service';

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
          nombre_estado: 'no iniciado',
        },
        {
          id_estado: '2',
          nombre_estado: 'en curso',
        },
        {
          id_estado: '3',
          nombre_estado: 'revision',
        },
        {
          id_estado: '4',
          nombre_estado: 'finalizado',
        },
      ];
    });
    this.spersonas.setPersonaLog().subscribe((Response) => {
      this.administrativo = Response;
      if (this.modorden.administrativo.id_usuario == '') {
        this.modorden.administrativo = this.administrativo;
        this.nuevo = true;
      }
    });
  }
  agregar(): void {
    this.nuevo = !this.nuevo;
    this.modorden.equipo =
      this.equipos.find((x) => x.id_equipo == this.modorden.equipo.id_equipo) ||
      new equipo();
    this.modorden.estado =
      this.estados.find((x) => x.id_estado == this.modorden.estado.id_estado) ||
      new estado();
    this.modorden.prioridad =
      this.prioridades.find(
        (x) => x.id_prioridad == this.modorden.prioridad.id_prioridad
      ) || new prioridad();
    this.sordenes.createOrden(this.modorden).subscribe((response) => {});
    this.cerrar();
  }
  actualizar() {
    this.modorden.equipo =
      this.equipos.find((x) => x.id_equipo == this.modorden.equipo.id_equipo) ||
      new equipo();
    this.modorden.estado =
      this.estados.find((x) => x.id_estado == this.modorden.estado.id_estado) ||
      new estado();
    this.modorden.prioridad =
      this.prioridades.find(
        (x) => x.id_prioridad == this.modorden.prioridad.id_prioridad
      ) || new prioridad();
    this.sordenes.putOrden(this.modorden).subscribe((Response) => {});
    this.cerrar();
  }
}
