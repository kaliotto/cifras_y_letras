import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Fase } from 'src/app/enums/fase';
import { Jugador } from 'src/app/interfaces/jugador';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-quien-gana',
  templateUrl: './quien-gana.component.html',
  styleUrls: ['./quien-gana.component.scss']
})
export class QuienGanaComponent implements OnInit {
  jugadores: Jugador[]=[];
  ganador = new FormControl('');
  puntuacion = new FormControl('');
  fases = Fase;
  fase:Fase | undefined;

  constructor(private juego: JuegoService) { }

  ngOnInit(): void {
    this.jugadores = this.juego.getJugadores();
    this.juego.getFase().subscribe(fase => { this.fase = fase });
  }

  alerta(){
    console.log(this.ganador.value);
    console.log(this.puntuacion.value);
  }
}
