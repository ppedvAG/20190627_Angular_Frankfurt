import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  city = 'Frankfurt & Dussmann Office';
  cards = [new Card('K', 'diamonds'), new Card('Q', 'spades'), new Card('6', 'hearts')];

  /* .push(new Card()) */
  timerMessage: string;
  handleStart() {
    this.timerMessage = 'Time is started';
  }
  handleTick(second: number) {
    this.timerMessage = `Remaining Time: ${second}`;
    if (second <= 3) {
      this.timerMessage += 'Time is almost up!';
    }
  }
}
/* console.log(cards);
 */
