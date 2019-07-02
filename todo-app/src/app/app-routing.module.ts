import { StartviewComponent } from './startview/startview.component';
import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneTodoComponent } from './one-todo/one-todo.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent},
  { path: 'startview', component: StartviewComponent},
  { path: '', redirectTo: '/startview', pathMatch: 'full'},
  { path: 'todo/:id', component: OneTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
