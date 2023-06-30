import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() presupuestoDisponible:number = 0;
  @Input() totalIngresos:number = 0;
  @Input() totalEgresos:number = 0;
  @Input() porcentajeEgresos:number = 0;
}
