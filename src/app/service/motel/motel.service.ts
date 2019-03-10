import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class MotelService {

  constructor() { }




  moteles: Moteles[] = [
    {
      id: new Date().getTime(),
      nombre: 'Motel 1',
      // tslint:disable-next-line:max-line-length
      descripcion: 'Disfruta momentos de placer en un ambiente íntimo y acogedor, enciende la llama de la pasión y vive el verdadero deseo de amar',
      direccion: 'Esta es la dirección #1',
      img: ['assets/img/moteles/motel1.jpg'],
      habitacionesDisponibles: 1,
      tarifa: 100000,
      promocion: 'Esta es la promoción #1'
    },
    {
      id: new Date().getTime(),
      nombre: 'Motel 2',
      descripcion: 'Este es el motel #2',
      direccion: 'Calle 44 No. 35 - 44 Chiquinquira - Barranquilla',
      img: ['assets/img/moteles/motel2.jpg'],
      habitacionesDisponibles: 5,
      tarifa: 36000,
      promocion: 'Paga dos horas y disfruta 3'
    },
    {
      id: new Date().getTime(),
      nombre: 'Motel 3',
      // tslint:disable-next-line:max-line-length
      descripcion: 'Reservación Inmedita GRATIS llegando en 45 Minutos o Reserve con tiempo con o sin Decoración, especial para celebraciones.',
      direccion: 'Esta es la dirección #3',
      img: ['assets/img/moteles/motel3.jpg'],
      habitacionesDisponibles: 8,
      tarifa: 78000,
      promocion: 'Esta es la promoción #3'
    }
  ];

}


export interface Moteles {
  id: number;
  nombre: string;
  descripcion: string;
  direccion: string;
  img: string[];
  habitacionesDisponibles: number;
  tarifa: number;
  promocion: string;
}
