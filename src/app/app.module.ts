import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {todosReducer} from "./todo/reducer/todos.reducer";
import {TodosService} from "./app.service";
import {TodosEffects} from "./todo/effect/todos.effect";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {TodosViewComponent} from "./todo/todos-view.component";
import {TodoViewComponent} from "./todo/todo-view/todo-view.component";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TodosViewComponent,
    TodoViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({todosReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(TodosEffects)
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
