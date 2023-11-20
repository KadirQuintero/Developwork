import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  escucharNuevaNotificacion() {
    return this.socket.fromEvent('nuevaNotificacion');
  }

  obtenerNotificaciones() {
    return this.socket.fromEvent('notificaciones');
  }

  enviarNuevaNotificacion(mensaje: string) {
    this.socket.emit('nuevaNotificacion', mensaje);
  }
}
