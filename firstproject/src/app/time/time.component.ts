import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit, OnDestroy {
  time: Date;
  interv: any; // von setInterval() kommt NodeJS.Timer zurück

  constructor() {
    this.interv = setInterval(() => { this.time = new Date(); }, 1000);
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    clearInterval(this.interv);
  }


}

