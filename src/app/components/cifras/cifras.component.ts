import { Component, Input, OnInit } from '@angular/core';
import { Fase } from 'src/app/enums/fase';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-cifras',
  templateUrl: './cifras.component.html',
  styleUrls: ['./cifras.component.scss']
})
export class CifrasComponent implements OnInit {
  @Input() fase!: Fase;

  constructor(private juego: JuegoService) { }

  ngOnInit(): void {
  }

  jugar() {
    this.juego.jugar();
  }

}
