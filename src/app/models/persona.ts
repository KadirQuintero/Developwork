import { equipo } from "./equipo";
import { estado } from "./estado";
import { jornada } from "./jordanas";
import { rol } from "./rol";

export class persona{
    id_usuario:string='';
    nombre:string='';
    nombre2:string='';
    apellido:string='';
    apellido2:string='';
    horas_trabajadas?:number;
    correo?:string='';
    contrasena?:string='';
    equipo:equipo= new equipo();
    estado:estado= new estado();
    rol:rol= new rol();
    //jornada:jornada= new jornada();
}