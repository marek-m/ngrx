import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'todos-view',
  templateUrl: './todos-view.component.html',
  styleUrls: ['./todos-view.component.css']
})
export class TodosViewComponent {
  @Input() todos;
}
