import { Habitacion } from './Habitacion';



export class Motel {
    id: number;
    nombre: string;
    descripcion: string;
    img: string[];
    numeroHabitaciones: number;
    tarifa: number;
    promocion: string;
    habitaciones: Habitacion;

    constructor() {
        this.id = new Date().getTime();
    }
}