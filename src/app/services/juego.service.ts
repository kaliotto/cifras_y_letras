import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Fase } from '../enums/fase';
import { Jugador } from '../interfaces/jugador';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  private fase$ = new Subject<Fase>();
  private jugadores: Jugador[] = [];
  faseActual: Fase = Fase.Intro;

  etapaActual: number = 0;
  etapasDelJuego: Fase[] = [Fase.Cifras, Fase.Letras, Fase.Letras, Fase.Cifras, Fase.Letras, Fase.Letras, Fase.Cifras, Fase.Letras, Fase.Letras, Fase.Cifras, Fase.Resultado];

  constructor() { }

  jugar() {
    this.faseActual = this.etapasDelJuego[this.etapaActual];
    this.etapaActual++;
    this.fase$.next(this.faseActual);
  }

  getFase(): Observable<Fase> {
    this.fase$.next(this.faseActual);
    return this.fase$.asObservable();
  }

  setJugadores(jugadores: Jugador[]) {
    this.jugadores = jugadores;
  }

  getJugadores() {
    return this.jugadores;
  }
}
