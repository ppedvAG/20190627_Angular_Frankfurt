import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  stern: string;
  @Input() zahl: number;

  constructor() {
  }

  ngOnInit() {
    this.stern = '*'.repeat(this.zahl);
  }

}
