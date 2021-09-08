import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() tiempo!: number;
  actual!: number;
  porcentaje!: number;
  constructor() { }

  ngOnInit(): void {
    this.actual = this.tiempo;
    this.porcentaje = (this.actual * 100) / this.tiempo;
    let intervalId = setInterval(() => {
      this.actual--;
      this.porcentaje = (this.actual * 100) / this.tiempo;
      if (this.actual === 0) clearInterval(intervalId)
    }, 1000)
  }
}
