import {Component, Input} from '@angular/core';
import {getTodos} from "./todo/reducer/todos.reducer";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Observable<any>;

  constructor(private store: Store<any>) {
    store.dispatch(getTodos());
    this.todos = store.select("todosReducer");
  }
}
