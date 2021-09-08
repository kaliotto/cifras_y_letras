import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.scss']
})
export class LetrasComponent implements OnInit {

  consonantes: string[] = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  vocales: string[] = ["a", "e", "i", "o", "u"];
  letras: string[] = [];
  terminado: boolean = false;

  constructor(private juego: JuegoService) { }

  ngOnInit(): void {
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
