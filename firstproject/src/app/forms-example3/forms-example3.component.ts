import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-example3',
  templateUrl: './forms-example3.component.html',
  styleUrls: ['./forms-example3.component.css']
})
export class FormsExample3Component implements OnInit {
  firstname: string;
  lastname: string;

  constructor() { }

  ngOnInit() {
  }
  getName(argum) {
    this.firstname = argum.fname;
    this.lastname = argum.lname;
  }

}
