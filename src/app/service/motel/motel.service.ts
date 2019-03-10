import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class MotelService {

  constructor() { }




  moteles: Moteles[] = [
    {
      nombre: 'Motel 1',
      descripcion: 'Este es el motel #1',
      direccion: 'Esta es la dirección #1',
      img: 'Imagen #1',
      habitacionesDisponibles: 1,
      tarifa: 100000,
      promocion: 'Esta es la promoción #1'
    },
    {
      nombre: 'Motel 2',
      descripcion: 'Este es el motel #2',
      direccion: 'Esta es la dirección #2',
      img: 'Imagen #2',
      habitacionesDisponibles: 5,
      tarifa: 36000,
      promocion: 'Esta es la promoción #2'
    },
    {
      nombre: 'Motel 3',
      descripcion: 'Este es el motel #3',
      direccion: 'Esta es la dirección #3',
      img: 'Imagen #3',
      habitacionesDisponibles: 8,
      tarifa: 78000,
      promocion: 'Esta es la promoción #3'
    }
  ];

}


export interface Moteles {
  nombre: string;
  descripcion: string;
  direccion: string;
  img: string;
  habitacionesDisponibles: number;
  tarifa: number;
  promocion: string;
}
