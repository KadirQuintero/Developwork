import { equipo } from "./equipo";
import { estado } from "./estado";
import { jornada } from "./jordanas";
import { rol } from "./rol";

export class persona{
    id_usuarioo:string='';
    nombre:string='';
    horas_trabajadas?:number;
    correo?:string='';
    password?:string='';
    equipo:equipo= new equipo();
    estado:estado= new estado();
    rol:rol= new rol();
    jornada:jornada= new jornada();
}