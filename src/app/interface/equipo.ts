import { estado } from './estado';
import { rol } from './rol';
export class equipo {
  id_equipo: string = '';
  nombre_equipo: string = '';
  descripcion?: string = '';
  rol: rol = new rol();
  estado: estado = new estado();
}
