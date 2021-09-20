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
  etapasDelJuego: Fase[] = [Fase.Cifras, Fase.Letras, Fase.Letras2, Fase.Cifras, Fase.Letras, Fase.Letras2, Fase.Cifras, Fase.Letras, Fase.Letras2, Fase.Cifras, Fase.Resultado];

  constructor() { }

  jugar() {

    // if (this.jugadores.length == 0) {
    //   this.jugadores = [
    //     { nombre: "mikel", posicion: 1, puntuacion: 0 },
    //     { nombre: "vero", posicion: 2, puntuacion: 0 },
    //     { nombre: "carol", posicion: 3, puntuacion: 0 },
    //     { nombre: "carlos", posicion: 4, puntuacion: 0 },
    //     { nombre: "txemi", posicion: 5, puntuacion: 0 },
    //     { nombre: "vir", posicion: 6, puntuacion: 0 },
    //     { nombre: "jesus", posicion: 7, puntuacion: 0 },
    //     { nombre: "nerea", posicion: 8, puntuacion: 0 },
    //     { nombre: "adrian", posicion: 9, puntuacion: 0 }
    //   ];
    // }

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

  getTiempoCifras(): number {
    return 45;
    //return 1;
  }
  getTiempoLetras(): number {
    return 30;
    //return 1;
  }
}
