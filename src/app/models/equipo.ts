import { estado } from './estado';
import { jornada } from './jordanas';
import { rol } from './rol';
export class equipo {
  id_equipo: string = '';
  nombre_equipo: string = '';
  descripcion?: string = '';
  rol: rol = new rol();
  jornada: jornada = new jornada();
  estado: estado = new estado();
}
