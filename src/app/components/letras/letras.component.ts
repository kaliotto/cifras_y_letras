import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.scss']
})
export class LetrasComponent implements OnInit {

  constructor(private juego:JuegoService) { }

  ngOnInit(): void {
  }

  jugar() {
    this.juego.jugar();
  }

}
