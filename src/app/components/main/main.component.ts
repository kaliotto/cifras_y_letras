import { Component, OnInit } from '@angular/core';
import { Fase } from 'src/app/enums/fase';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  fase: Fase = Fase.Intro;
  fases = Fase;

  constructor(private juego: JuegoService) {
    juego.getFase().subscribe(fase => { this.fase = fase });
  }

  ngOnInit(): void {

  }
}
