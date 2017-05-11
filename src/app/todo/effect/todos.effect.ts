import {Injectable} from "@angular/core";
import {TodosService} from "../../app.service";
import {GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR} from "../reducer/todos.reducer";
import {Observable} from "rxjs";
import {Effect, Actions} from "@ngrx/effects";

@Injectable()
export class TodosEffects {
  constructor( private actions$ : Actions,
               private todosService : TodosService ) {
  }

  @Effect() getTodos$ = this.actions$
    .ofType(GET_TODOS)
    .switchMap(action =>
      this.todosService.getTodos()
        .map(todos => ({type: GET_TODOS_SUCCESS, payload: todos}))
        .catch(() => Observable.of({type: GET_TODOS_ERROR})));
}
