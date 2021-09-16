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

  constructor(private juego: JuegoService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inicializacion();
  }
  inicializacion() {
    this.poolNumeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 25, 50, 75, 100];
    this.cifras = [];
  }

  jugar() {
    this.juego.jugar();
  }

  getCifra() {
    this.poolNumeros.sort(() => 0.5 - Math.random());
    console.log("Mezcladas: " + this.poolNumeros + " ----> " + this.poolNumeros.length);

    this.cifras.push(this.poolNumeros.splice(0, 1)[0]);
  }

}

/*

// Shuffle array
const shuffled = array.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, n);

*/