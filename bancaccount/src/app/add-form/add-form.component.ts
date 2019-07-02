import { BancaccountService } from './../bancaccount.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  descrVar: string;
  amountVar: number;
  dateVar: Date;

  constructor(private baservice: BancaccountService) { }

  ngOnInit() {
  }

  onSubmit(argum) {
    this.baservice.addTransaction(argum.descr, argum.date, argum.amount);
    this.descrVar = '';
    this.amountVar = undefined;
    this.dateVar = undefined;
  }

}
