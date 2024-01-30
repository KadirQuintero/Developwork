import { Component, OnDestroy, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketService } from '../Services/socket.service';
import { PersonaService } from '../personas/persona.service';
import { persona } from '../models/persona';
import { notificacion } from '../models/notificacion';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  notificaciones: any[] = [];
  nuevaNotificacion: notificacion = new notificacion();

  constructor(private Ssoket: SocketService, private spersona: PersonaService) {

  }
  ngOnDestroy(): void {
    this.Ssoket.disconet().subscribe();
  }
  ngOnInit(): void {
    this.spersona.setPersonaLog().subscribe((Response: persona) => {
      this.nuevaNotificacion.idAdmin = Response.id_usuario;
      this.nuevaNotificacion.id_equipo = Response.equipo.id_equipo;
      this.Ssoket.conectarConIdUsuario(Response).subscribe(
        (notificacion: any) => {
          this.notificaciones = notificacion;
        }
      );
    });
    this.Ssoket.escucharNuevaNotificacion().subscribe((notificacion) => {
      this.notificaciones.push(notificacion);
    });
  }
  eliminar(__notificacion: notificacion) {
    this.Ssoket.eliminar(__notificacion).subscribe((Response) => {
      console.log(Response);
    });
  }
}
