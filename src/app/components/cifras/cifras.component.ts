import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Fase } from 'src/app/enums/fase';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-cifras',
  templateUrl: './cifras.component.html',
  styleUrls: ['./cifras.component.scss']
})
export class CifrasComponent implements OnInit, OnChanges {
  @Input() fase!: Fase;

  poolNumeros: number[] = [];
  cifras: number[] = [];
  numeroObjetivo: number = 0;
  numeroObjetivoAnimado: number = 0;
  terminado: boolean = false;
  tiempo!: number;

  constructor(private juego: JuegoService) {
    this.tiempo = juego.getTiempoCifras();
  }

  ngOnInit(): void {
    this.inicializacion();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inicializacion();
  }
  inicializacion() {
    this.poolNumeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 25, 50, 75, 100];
    this.cifras = [];
    this.numeroObjetivo = Math.floor(Math.random() * (999 - 101 + 1)) + 101;
    this.terminado = false;
  }

  jugar() {
    this.juego.jugar();
  }

  getCifra() {
    this.poolNumeros.sort(() => 0.5 - Math.random());
    console.log("Mezcladas: " + this.poolNumeros + " ----> " + this.poolNumeros.length);

    this.cifras.push(this.poolNumeros.splice(0, 1)[0]);

    if (this.cifras.length == 6) {
        this.EfectoContadorAnimado();
    }
  }
  
  private EfectoContadorAnimado() {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp)
        startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / 300, 1);
      this.numeroObjetivoAnimado = Math.floor(progress * (this.numeroObjetivo - 0) + 0);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}