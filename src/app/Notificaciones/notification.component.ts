import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketService } from '../Servicios/socket.service';
import { PersonaService } from '../personas/persona.service';
import { persona } from '../models/persona';
import { notificacion } from '../models/notificacion';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  notificaciones: any[] = [];
  nuevaNotificacion: notificacion = new notificacion();

  constructor(
    private Ssoket: SocketService,
    private spersona: PersonaService
  ) {
    
  }

  ngOnInit(): void {
    this.spersona.setPersonaLog().subscribe((Response: persona) => {
      this.nuevaNotificacion.idAdmin = Response.id_usuario.trim();
      this.nuevaNotificacion.id_equipo = Response.equipo.id_equipo;
      this.Ssoket.conectarConIdUsuario(Response);
    });
    this.Ssoket.escucharNuevaNotificacion().subscribe((notificacion) => {
      this.notificaciones.push(notificacion);
    });

    this.Ssoket.obtenerNotificaciones().subscribe((notificaciones: any) => {
      this.notificaciones = notificaciones;
    });

  }
  eliminar(__notificacion:notificacion){
    this.Ssoket.eliminar(__notificacion).subscribe(Response=>{
      console.log(Response);
    })
  }
}
