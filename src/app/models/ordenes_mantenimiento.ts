import { estado } from "./estado";
import { equipo } from "./equipo";
import { persona } from "./persona";
export class ordenes_matenimiento{
    estado:estado= new estado();
    id_orden:string='';
    descripcion:string='';
    equipo:equipo= new equipo();
    comentarios:string='';
    personas: persona[]=[];
    administrativo:persona= new persona();
    hora_incio?:Date;
    hora_fin?:Date;
}