import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Fase } from 'src/app/enums/fase';
import { Jugador } from 'src/app/interfaces/jugador';
import { JuegoService } from 'src/app/services/juego.service';
import { Modal } from "bootstrap";

@Component({
  selector: 'app-quien-gana',
  templateUrl: './quien-gana.component.html',
  styleUrls: ['./quien-gana.component.scss']
})
export class QuienGanaComponent implements OnInit {
  @Input() fase!: Fase;

  jugadores: Jugador[] = [];
  ganador = new FormControl('');
  puntuacion = new FormControl('');
  fases = Fase;

  modal: any;

  constructor(private juego: JuegoService) { }

  ngAfterContentInit(): void {
    this.jugadores = this.juego.getJugadores();
    this.mostrarModal();
  }

  ngOnInit(): void { }

  guardarPuntuacion() {
    let ganador = this.jugadores.find(j => j.nombre == this.ganador.value) as Jugador;
    ganador.puntuacion += this.puntuacion.value;
    this.juego.setJugadores(this.jugadores);
    this.modal.toggle();
    this.juego.jugar()
  }

  mostrarModal() {
    let element = document.getElementById('quienGanaModal') as HTMLElement;
    this.modal = new Modal(element);
    this.modal.show();
  }
}
