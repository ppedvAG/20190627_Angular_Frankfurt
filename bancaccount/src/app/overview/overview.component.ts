import { BancaccountService } from './../bancaccount.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(public bas: BancaccountService)
  /* public, weil in html verwendet wird */
  { }

  ngOnInit() {
    this.bas.loadDemoData();
  }

}
