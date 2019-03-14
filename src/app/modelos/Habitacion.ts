import { Motel } from './motel';
import { Admin } from './admin';
import { Reserva } from './reserva';

export class Habitacion {
  id: number;
  nomenclatura: string;
  estado: string;
  historial: string[];
  motel: Motel;
  admin: Admin;
  reserva: Reserva[];

  constructor(nomenclatura: string, estado: string) {
    this.estado = estado;
    this.nomenclatura = nomenclatura;
  }
}
