import { Egreso } from './egreso.model';

export class EgresoService {
  egresos: Egreso[] = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 200),
  ];

  eliminarEgreso(egreso: Egreso) {
    const index: number = this.egresos.indexOf(egreso);
    this.egresos.splice(index,1);
  }
  porcentajeEgreso(ingresoTotal:number, valorEgreso:number){
    return valorEgreso/ingresoTotal;
  }
  agregarEgreso(egreso: Egreso){
    this.egresos.push(egreso);
  }
}
