import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-cifras',
  templateUrl: './cifras.component.html',
  styleUrls: ['./cifras.component.scss']
})
export class CifrasComponent implements OnInit {

  constructor(private juego: JuegoService) { }

  ngOnInit(): void {
  }

  jugar() {
    this.juego.jugar();
  }

}
