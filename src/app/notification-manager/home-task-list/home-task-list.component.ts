import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  getDoneHome,
  getTodoHome,
  setHomeTask
} from '../../home-tasks.state';
import { AppState } from '../../state';

@Component({
  selector: 'home-task-list',
  templateUrl: './home-task-list.component.html'
})
export class HomeTaskListComponent {
  done: Observable<string[]>;
  todo: Observable<string[]>;

  checkbox = 'check_box';
  outline = 'check_box_outline_blank';

  constructor(private store: Store<AppState>) {
    this.done = store.pipe(select(getDoneHome));
    this.todo = store.pipe(select(getTodoHome));
  }

  homeTask(task: string, complete: boolean) {
    this.store.dispatch(setHomeTask({ task, complete }));
  }
}
