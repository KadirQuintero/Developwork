import { estado } from './estado';
import { equipo } from './equipo';
import { persona } from './persona';
import { prioridad } from './prioridad';
export class ordenes_matenimiento {
  id_orden: string = '';
  comentarios: string = '';
  equipo: equipo = new equipo();
  prioridad: prioridad = new prioridad();
  estado: estado = new estado();
  administrativo: persona = new persona(); //No recuerdo pa' que era xd
  descripcion: string = ''; //no existe en la BD
  personas: persona[] = []; //No recuerdo pa' que era
}
