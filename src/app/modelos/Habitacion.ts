import { Motel } from "./motel";
import { Reserva } from "./reserva";

export class Habitacion {
  id: number;
  nomenclatura: string;
  estado: boolean;
  // estado true = habitacion disponible
  historial: Reserva[];
  motel: Motel;

  constructor(nomenclatura: string, estado: boolean = true, motel: Motel) {
    this.id = new Date().getTime();
    this.estado = estado;
    this.nomenclatura = nomenclatura;
    this.motel = motel;
  }
}
