import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { DiceComponent } from './dice/dice.component';
import { RatingComponent } from './rating/rating.component';
import { CardComponent } from './card/card.component';
import { DiashowComponent } from './diashow/diashow.component';
import { RomanNumberComponent } from './roman-number/roman-number.component';
import { HomeawayComponent } from './homeaway/homeaway.component';
import { TimerComponent } from './timer/timer.component';
import { FormsExample1Component } from './forms-example1/forms-example1.component';
import { FormsExample2Component } from './forms-example2/forms-example2.component';
import { FormsExample3Component } from './forms-example3/forms-example3.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    DiceComponent,
    RatingComponent,
    CardComponent,
    DiashowComponent,
    RomanNumberComponent,
    HomeawayComponent,
    TimerComponent,
    FormsExample1Component,
    FormsExample2Component,
    FormsExample3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
