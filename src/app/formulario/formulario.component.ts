import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  tipo: string = 'ingresoOperacion';
  titulo: string = '';
  valor: number = 0;

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {}

  ngOnInit(): void {}

  tipoOperacion(evento: any) {
    this.tipo = evento.target.value;
  }

  agregar() {
    if (this.tipo === 'ingresoOperacion') {
      this.ingresoServicio.agregarIngreso(new Ingreso(this.titulo, this.valor));
    }
    if (this.tipo === 'egresoOperacion') {
      this.egresoServicio.agregarEgreso(new Egreso(this.titulo, this.valor));
    }
  }
}
