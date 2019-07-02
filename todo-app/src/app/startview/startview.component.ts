import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-startview',
  templateUrl: './startview.component.html',
  styleUrls: ['./startview.component.css']
})
export class StartviewComponent implements OnInit {

  todos: Todo[];

  constructor(private tS: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.tS.getTodos()
    .subscribe(todos => this.todos = todos.slice(0, 4));
  }

}
