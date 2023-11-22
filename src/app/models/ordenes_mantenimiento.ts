import { estado } from './estado';
import { equipo } from './equipo';
import { persona } from './persona';
import { prioridad } from './prioridad';
export class ordenes_matenimiento {
  estado: estado = new estado();
  id_orden: string = '';
  descripcion: string = '';
  equipo: equipo = new equipo();
  comentarios: string = '';
  personas: persona[] = [];
  prioridad: prioridad = new prioridad();
  administrativo: persona = new persona();
  hora_incio?: Date;
  hora_fin?: Date;
}
