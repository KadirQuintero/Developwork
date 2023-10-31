import { equipo } from "./equipo";
import { estado } from "./estado";
import { rol } from "./rol";

export class persona{
    id_usuarioo:string='';
    nombre:string='';
    horas_trabajadas?:number;
    correo?:string='';
    password?:string='';
    equipo?:equipo;
    estado?:estado;
    rol?:rol;
}