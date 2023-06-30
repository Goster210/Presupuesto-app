import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];
  constructor(private ingresosService: IngresoService) {}

  ngOnInit(): void {
    this.ingresos = this.ingresosService.ingresos;
  }

  eliminarIngreso(ingreso:Ingreso) {
    this.ingresosService.eliminarIngreso(ingreso);
    alert('Se elimino el Ingreso: '+ ingreso.titulo);
  }
}
