import { Usuario } from "./usuario";
import { Motel } from "./motel";

export class Reserva {
  id: number;
  valor: number;
  usuario: Usuario;
  motel: Motel;

  constructor(valor: number, usuario: Usuario) {
    this.valor = valor;
    this.usuario = usuario;
  }
}
