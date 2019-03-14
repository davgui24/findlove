import { Usuario } from "./usuario";
import { Motel } from "./motel";
import { Pago } from "./pago";

export class Reserva {
  id: number;
  valor: number;
  usuario: Usuario;
  motel: Motel;
  fechareserva: Date;
  fecharesgistroreserva: string;
  hora: number;
  pago: Pago;

  constructor(valor: number, usuario: Usuario, fechareserva: Date, pago: Pago) {
    this.id = new Date().getTime();
    this.valor = valor;
    this.usuario = usuario;
    this.fechareserva = fechareserva;
    this.fecharesgistroreserva =
      new Date() + "@" + new Date().getHours.toString();
    this.hora = fechareserva.getHours();
    this.pago = pago;
  }
}
