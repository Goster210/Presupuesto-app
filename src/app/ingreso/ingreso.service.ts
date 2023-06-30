import { Ingreso } from './ingreso.model';

export class IngresoService {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 2100),
    new Ingreso('Venta coche', 1500),
    new Ingreso('Arriendos', 400),
  ];

  eliminarIngreso(ingreso: Ingreso) {
    const index: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(index,1);
  }
}
