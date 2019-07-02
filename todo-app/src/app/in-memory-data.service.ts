import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const todos = [
      { id: 1, title: 'zur Post' },
      { id: 2, title: 'einkaufen' },
      { id: 3, title: 'Friseur' },
      { id: 4, title: 'Zahnarzt' },
      { id: 5, title: 'putzen' },
      { id: 6, title: 'Mama anrufen' },
      { id: 7, title: 'Geschenke kaufen' },
      { id: 8, title: 'Sport' },
      { id: 9, title: 'Fahrrad reparieren' }
    ];
    return {todos};
  }
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    /* ... spread-Operator */
  }

  constructor() { }
}
