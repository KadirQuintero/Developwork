import { Injectable } from '@angular/core';
import { ordenes_matenimiento } from '../models/ordenes_mantenimiento';
import { jornada } from '../models/jordanas';
import { rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  viewO:boolean=true;
  _ordenes:ordenes_matenimiento[]=[
    {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    },
    {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    },
    {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    },
    {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    }, {
      id_orden:"1",
      descripcion:"Manteniemiento Preventivo pozo 72",
      equipo:{
        id_equipo:"1",
        nombre_equipo:"Mantenimiento Mecanico",
        rol:new rol(),
        jornada: new jornada(),
        estado:{
          id_estado:"1",
          nombre_estado:"Operativo"
        }
      }
    },

    
  ];

  view():boolean{
    return this.viewO;
  }
  SetView(view:boolean){
    this.viewO=view;
  }

  ordenes():ordenes_matenimiento[]{
    return this._ordenes;
  }
  constructor() { }
}
