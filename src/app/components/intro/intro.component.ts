import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Fase } from 'src/app/enums/fase';
import { Jugador } from 'src/app/interfaces/jugador';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  introduciendoJugadores: boolean = false;
  jugadores: Jugador[] = [];
  nombre = new FormControl('');

  constructor(private juego: JuegoService) { }

  ngOnInit(): void {
  }

  introducirJugadores(introJugadores: boolean) {
    this.introduciendoJugadores = introJugadores;
  }

  jugar() {
    this.juego.jugar();
  }

  guardarJugador() {
    let auxJugador: Jugador = { nombre: this.nombre.value, puntuacion: 0, posicion: this.jugadores.length };
    this.jugadores.push(auxJugador);
    this.nombre = new FormControl('');
    console.log(this.jugadores);
  }



}
