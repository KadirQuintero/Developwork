import { estado } from './estado';
import { equipo } from './equipo';
import { persona } from './persona';
import { prioridad } from './prioridad';
export class ordenes_matenimiento {
  idOrder: string = '';
  //comentarios: string = '';
  idEquipo: string = '';
  prioridad: string = '';
  estado: string = '';
  idUser: string = ''; //No recuerdo pa' que era xd
  description: string = ''; //no existe en la BD
  personas: persona[] = []; //No recuerdo pa' que era
}
