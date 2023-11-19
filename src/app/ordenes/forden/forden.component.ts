import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TeamservService } from 'src/app/Equipos/teamserv.service';
import { EstadoserviceService } from 'src/app/Servicios/Estados/estadoservice.service';
import { equipo } from 'src/app/models/equipo';
import { estado } from 'src/app/models/estado';
import { ordenes_matenimiento } from 'src/app/models/ordenes_mantenimiento';
import { persona } from 'src/app/models/persona';
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
  administrativo: persona = new persona();
  cerrar() {
    this.mensajeCambiado.emit(new ordenes_matenimiento());
  }

  constructor(
    private sequipos: TeamservService,
    private sestados: EstadoserviceService,
    private spersonas: PersonaService
  ) {
    this.sequipos.getData().subscribe((Response) => {
      this.equipos = Response;
    });

    this.sestados.getData().subscribe((Response) => {
      this.estados = Response;
    });
    this.spersonas.setPersonaLog().subscribe((Response) => {
      this.administrativo = Response;
      if (this.modorden.administrativo.id_usuario == '') {
        this.modorden.administrativo = this.administrativo;
      }
    });
  }
}
