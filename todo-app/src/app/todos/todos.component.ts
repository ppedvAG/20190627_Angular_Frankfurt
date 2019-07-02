import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private tS: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.tS.getTodos()
    .subscribe(todos => this.todos = todos);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.tS.addTodo({ title } as Todo)
      .subscribe(todo => {
        this.todos.push(todo);
      });
  }

}
