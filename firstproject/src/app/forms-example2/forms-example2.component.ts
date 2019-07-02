import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-example2',
  templateUrl: './forms-example2.component.html',
  styleUrls: ['./forms-example2.component.css']
})
export class FormsExample2Component implements OnInit {
  age: number;
  message: string;

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    if (this.age >= 18) {
      this.message = 'Bedienen Sie sich an unserer Bar';
    } else {
      this.message = 'nicht volljährig';
    }
  }

}
