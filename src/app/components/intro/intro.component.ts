import { Component, Input, OnInit } from '@angular/core';
import { Fase } from 'src/app/enums/fase';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private juego:JuegoService) { }

  ngOnInit(): void {
  }

  setFase() {
    this.juego.setFase(Fase.Letras);
  }

  

}
