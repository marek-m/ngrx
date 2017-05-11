import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent {
  @Input() todo;
}
