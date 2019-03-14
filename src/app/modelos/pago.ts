// pendiente a valores devuelto por payu
export class Pago {
  id: number;
  tipo: boolean;
  // true=tarjeta False=efectivo
  fecha: Date;
  estado: string;
  pago: number;

  constructor(tipo: boolean) {
    this.id = new Date().getTime();
    this.tipo = tipo;
  }
}
