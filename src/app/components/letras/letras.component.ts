import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Fase } from 'src/app/enums/fase';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.scss']
})
export class LetrasComponent implements OnInit, OnChanges {
  @Input() fase!: Fase;

  consonantes: string[] = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  vocales: string[] = ["a", "e", "i", "o", "u"];

  letras: string[] = [];
  terminado: boolean = false;

  constructor(private juego: JuegoService) { }

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
  }

  jugar() {
    this.juego.jugar();
  }

}
