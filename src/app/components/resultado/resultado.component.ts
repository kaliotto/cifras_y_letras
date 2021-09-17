import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/interfaces/jugador';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  jugadores: Jugador[] = [];
  ganador: Jugador = {
    posicion: 0,
    nombre: '',
    puntuacion: 0
  };

  constructor(private juego: JuegoService) { }

  ngOnInit(): void {
    this.jugadores = this.juego.getJugadores();
    this.jugadores.sort((a, b) => b.puntuacion-a.puntuacion);
    this.ganador = this.jugadores.reduce((prev, current) => {
      return (prev.puntuacion > current.puntuacion) ? prev : current
    });
    console.log(this.ganador);
    
  }

}
