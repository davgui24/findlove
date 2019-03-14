import { Motel } from "./motel";

export class Admin {
  id: number;
  nombre: string;
  user: string;
  pass: string;
  rol: string;
  fechacreacion: Date;
  fechaultimologin: Date;
  motel: Motel;

  constructor(
    nombre: string,
    user: string,
    pass: string,
    rol: string,
    motel: Motel
  ) {
    this.id = new Date().getTime();
    this.nombre = nombre;
    this.user = user;
    this.pass = pass;
    this.rol = rol;
    this.fechacreacion = new Date();
    this.motel = motel;
  }
}
