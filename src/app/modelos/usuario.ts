import { Motel } from "./motel";
import { Reserva } from "./reserva";

export class Usuario {
  id: number;
  nombre: string;
  user: string;
  pass: string;
  rol: string;
  historial: Reserva[];
  fechacreacion: Date;
  fechaultimologin: Date;
  motelfavorito: Motel;
  //   comentario para probar comilla simple 'comillas simples'

  constructor(nombre: string, user: string, pass: string) {
    this.nombre = nombre;
    this.id = new Date().getTime();
    this.user = user;
    this.pass = pass;
    this.fechacreacion = new Date();
    this.historial = [];
  }
}
