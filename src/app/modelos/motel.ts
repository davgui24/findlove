// tslint:disable-next-line: quotemark
import { Habitacion } from './Habitacion';

export class Motel {
  id: number;
  nombre: string;
  descripcion: string;
  img: string[];
  numeroHabitaciones: number;
  promocion: string;
  habitaciones: Habitacion;

  constructor(numeroHabitacones: number, nombre: string) {
    this.id = new Date().getTime();
    this.numeroHabitaciones = numeroHabitacones;
    this.nombre = nombre;
  }
}
