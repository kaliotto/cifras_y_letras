import { Injectable } from '@angular/core';
import { Fase } from '../enums/fase';
import { Jugador } from '../interfaces/jugador';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  fase: Fase | undefined;
  jugadores: [Jugador] | undefined;

  constructor() { }

  setFase(newFase: string) {
    this.fase = (<any>Fase)[newFase];
  }

  getFase() {
    return this.fase;
  }

  setJugadores(jugadores: [Jugador]) {
    this.jugadores = jugadores;
  }
}
