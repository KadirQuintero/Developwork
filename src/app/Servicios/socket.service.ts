import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { persona } from '../models/persona';
import { notificacion } from '../models/notificacion';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  conectarConIdUsuario(persona: persona) {
    this.socket.ioSocket.io.opts.query = { usuario: JSON.stringify(persona) }; ;
    this.socket.connect();
  }
  escucharNuevaNotificacion() {
    return this.socket.fromEvent('nuevaNotificacion');
  }

  obtenerNotificaciones() {
    return this.socket.fromEvent('notificaciones');
  }

  enviarNuevaNotificacion(mensaje: notificacion) {
    this.socket.emit('nuevaNotificacion', mensaje);
  }
}
