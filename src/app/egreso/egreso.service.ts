import { Egreso } from './egreso.model';

export class EgresoService {
  egresos: Egreso[] = [
    new Egreso('Renta departamento', 800),
    new Egreso('Ropa', 400),
  ];

  eliminarEgreso(egreso: Egreso) {
    const index: number = this.egresos.indexOf(egreso);
    this.egresos.splice(index,1);
  }
  porcentajeEgreso(valorTotal:number, valorEgreso:number){
    return valorEgreso/valorTotal;
  }
}
