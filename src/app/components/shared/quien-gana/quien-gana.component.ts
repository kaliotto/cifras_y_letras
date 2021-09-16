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
    //this.jugadores = this.juego.getJugadores();
    this.jugadores = [{ nombre: "mikel", posicion: 1, puntuacion: 0 }, { nombre: "vero", posicion: 1, puntuacion: 0 }, { nombre: "carol", posicion: 1, puntuacion: 0 }, { nombre: "carlos", posicion: 1, puntuacion: 0 }, { nombre: "txemi", posicion: 1, puntuacion: 0 }, { nombre: "vir", posicion: 1, puntuacion: 0 }, { nombre: "jesus", posicion: 1, puntuacion: 0 }, { nombre: "nerea", posicion: 1, puntuacion: 0 }, { nombre: "adrian", posicion: 1, puntuacion: 0 }];
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
