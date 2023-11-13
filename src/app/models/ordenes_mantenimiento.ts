import { estado } from "./estado";
import { equipo } from "./equipo";
export class ordenes_matenimiento{
    estado?:estado;
    id_orden:string='';
    descripcion:string='';
    equipo?:equipo;
}