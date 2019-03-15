import { Motel } from "./motel";
import { Reserva } from "./reserva";

export class Usuario {
  id: number;
  avatar: string;
  nombre: string;
  user: string;
  pass: string;
  rol: string;
  historial: Reserva[];
  fechacreacion: number;
  fechaultimologin: Date;
  motelfavorito: Motel;
  //   comentario para probar comilla simple 'comillas simples'

  constructor(nombre: string, user: string, pass: string, avatar: string) {
    this.nombre = nombre;
    this.id = new Date().getTime();
    this.user = user;
    this.pass = pass;
    this.avatar = avatar;
    this.fechacreacion = new Date().getTime();
    this.historial = [];
  }
}
