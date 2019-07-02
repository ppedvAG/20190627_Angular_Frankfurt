import { Transaction } from './transaction';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancaccountService {
  initialBalance = 0;
  public transactions: Transaction[] = []; /* ohne public ist private. und in overview nicht sichtbar */

  constructor() { }

  setInitialBalance(balance: number) {
    this.initialBalance = balance;
  }
  addTransaction(descr: string, d: Date, amt: number) {
    this.transactions.push(new Transaction(descr, d, amt));
  }

  loadDemoData() {
    this.initialBalance = 500;
    this.addTransaction('lohn', new Date('2019-06-01'), 3000);
    this.addTransaction('einkaufen', new Date('2019-06-10'), -45.34);
    this.addTransaction('fahrrad reparatur', new Date('2019-06-20'), -134.56);
  }

  getCurrentBalance(): number {
    let balance = this.initialBalance;
    for (const tr of this.transactions) {
      balance += tr.amount;
    }
    return balance;
  }
}
