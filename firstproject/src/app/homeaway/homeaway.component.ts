import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeaway',
  templateUrl: './homeaway.component.html',
  styleUrls: ['./homeaway.component.css']
})
export class HomeawayComponent implements OnInit {
  isHome: boolean;

  constructor() { }

  ngOnInit() {
  }
  home() {
    this.isHome = true;
  }
  away() {
    this.isHome = false;
  }
  getText() {
    return (this.isHome) ? 'Maus ist drin' : 'Maus ist weg';
  }

}
