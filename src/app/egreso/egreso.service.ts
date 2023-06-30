import { Egreso } from './egreso.model';

export class EgresoService {
  egresos: Egreso[] = [
    new Egreso('Renta departamento', 800),
    new Egreso('Ropa', 400),
  ];
}
