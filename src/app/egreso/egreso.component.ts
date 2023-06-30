import { Component, Input, OnInit } from '@angular/core';
import { EgresoService } from './egreso.service';
import { Egreso } from './egreso.model';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css'],
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() presupuestoDisponible: number = 0;

  constructor(private egresoService: EgresoService) {}

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoService.eliminarEgreso(egreso);
  }

  porcentajeEgreso(egreso: Egreso) {
    return this.egresoService.porcentajeEgreso(this.presupuestoDisponible, egreso.valor);
  }
}
