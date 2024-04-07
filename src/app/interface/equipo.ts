import { estado } from './estado';
import { rol } from './rol';
export class equipo {
  id_equipo: string = ''; //Maximo 8 caracteres
  nombre_equipo: string = ''; //Maximo 15 caracteres
  descripcion?: string = ''; //Maximo 200 caracteres
  //rol: rol = new rol(); //No existe en la BD
  estado: string = ''; //Dos opciones, activo o inactivo
}
