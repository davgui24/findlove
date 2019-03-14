import { Motel } from './motel';
import { Reserva } from './reserva';

export class Usuario {
    id: number;
    nombre: string;
    user: string;
    pass: string;
    rol: string;
    telefono: number;
    historial: Reserva[];
    fechacreacion: Date;
    fechaultimologin: Date;
    motelfavorito: Motel;



    constructor(nombre: string, user: string, pass: string, rol: string) {
        this.nombre = nombre;
        this.user = user;
        this.pass = pass;
        this.rol = rol;
    }