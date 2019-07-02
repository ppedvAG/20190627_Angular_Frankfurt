import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { tick } from '@angular/core/src/render3';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() time: number;
  @Output() tick: EventEmitter<number> = new EventEmitter<number>();
  @Output() start: EventEmitter<void> = new EventEmitter<void>();
  remainingTime: number;
  intervalID: any;
  started: boolean;

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.start.emit();
    this.remainingTime = this.time;
    this.started = true;
    this.intervalID = setInterval(
      () => {
        this.remainingTime--;
        this.tick.emit(this.remainingTime);
        if (this.remainingTime === 0) {
          clearInterval(this.intervalID);
          this.started = false;
        }
      }
      , 1000
    );

  }

}
