import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Fase } from 'src/app/enums/fase';
import { JuegoService } from 'src/app/services/juego.service';
import * as Diccionario from 'src/assets/diccionario.json';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.scss']
})
export class LetrasComponent implements OnInit, OnChanges {
  @Input() fase!: Fase;

  consonantes: string[] = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  vocales: string[] = ["a", "e", "i", "o", "u"];
  masLargas: string[] = [];

  letras: string[] = [];
  terminado: boolean = false;
  tiempo!: number;

  constructor(private juego: JuegoService) {
    this.tiempo = juego.getTiempoLetras();
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inicializacion();
  }

  inicializacion() {
    this.letras = [];
    this.terminado = false;
  }

  consonante() {
    this.letras.push(this.consonantes[Math.floor(Math.random() * this.consonantes.length)].toUpperCase());
  }

  vocal() {
    this.letras.push(this.vocales[Math.floor(Math.random() * this.vocales.length)].toUpperCase());
    //this.letras = ["V", "E", "D", "A", "E", "J", "X", "X", "X",]
  }

  jugar() {
    this.juego.jugar();
  }

  terminar() {
    this.terminado = true;
    this.calcular();
  }

  calcular() {

    let candidatas: string[] = [];

    for (let j = 0; j < Diccionario.default.length; j++) {
      let palabra = Diccionario.default[j].toUpperCase();
      let letras2 = JSON.parse(JSON.stringify(this.letras));
      for (let i = 0; i < palabra.length; i++) {
        if (letras2.includes(palabra[i])) {
          letras2.splice(letras2.indexOf(palabra[i]), 1)
        } else {
          break;
        }
      }
      if (9 - letras2.length == palabra.length) {
        candidatas.push(palabra);
      }
    }

    console.log(candidatas);
    let masLarga = candidatas.reduce((c, v) => c.length > v.length ? c : v);
    this.masLargas = candidatas.filter(p => p.length >= masLarga.length);
    if (this.masLargas.length == 1) {
      let masCortas = candidatas.filter(p => p.length < masLarga.length - 1).sort((a, b) => b.length - a.length).slice(0, 2);
      this.masLargas = this.masLargas.concat(masCortas);
    }
    this.masLargas.slice(0, 11);
    console.log(this.masLargas);
  }
}
