import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketService } from '../Servicios/socket.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  notificaciones: any[] = [];
  nuevaNotificacion: string = '';

  constructor(private Ssoket:SocketService) {}

  ngOnInit(): void {
  // Escuchar nuevas notificaciones desde el servidor
  this.Ssoket.escucharNuevaNotificacion().subscribe((notificacion) => {
    this.notificaciones.push(notificacion);
  });

  // Obtener notificaciones existentes desde el servidor
  this.Ssoket.obtenerNotificaciones().subscribe((notificaciones:any) => {
    this.notificaciones = notificaciones;
  });
}

enviarNotificacion(): void {
  if (this.nuevaNotificacion.trim() !== '') {
    // Enviar nueva notificación al servidor
    this.Ssoket.enviarNuevaNotificacion(this.nuevaNotificacion);
    this.nuevaNotificacion = '';
  }
  }
}
