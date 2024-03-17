import { equipo } from "./equipo";
import { estado } from "./estado";

import { rol } from "./rol";

export class persona{
    id_usuario:string='';
    nombre:string='';
    nombre2:string='';
    apellido:string='';
    apellido2:string='';
    correo:string='';
    contrasena:string='';
    equipo:equipo= new equipo();
    estado:estado= new estado();
    rol:rol= new rol();
}
