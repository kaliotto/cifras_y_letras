import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Fase } from '../enums/fase';
import { Jugador } from '../interfaces/jugador';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  fase = new Subject<Fase>();
  fase$ = this.fase.asObservable();
  jugadores: [Jugador] | undefined;

  etapaActual: number = 0;
  etapasDelJuego: Fase[] = [Fase.Cifras, Fase.Letras, Fase.Letras, Fase.Cifras, Fase.Letras, Fase.Letras, Fase.Cifras, Fase.Letras, Fase.Letras, Fase.Cifras, Fase.Resultado];

  constructor() { }

  jugar() {
    let faseActual: Fase = this.etapasDelJuego[this.etapaActual];
    this.etapaActual++;
    this.fase.next((<any>Fase)[faseActual]);
  }

  getFase() {
    return this.fase;
  }

  setJugadores(jugadores: [Jugador]) {
    this.jugadores = jugadores;
  }

  getJugadores() {
    return this.jugadores;
  }
}
