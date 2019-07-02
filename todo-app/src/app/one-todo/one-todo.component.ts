import { TodoService } from './../todo.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrls: ['./one-todo.component.css']
})
export class OneTodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
    private tS: TodoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tS.getTodo(id)
    .subscribe(todo => this.todo = todo);
  }

  save(): void {
    this.tS.updateTodo(this.todo)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
