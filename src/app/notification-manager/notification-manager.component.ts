import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, completeAll } from '../state';

@Component({
  selector: 'notification-manager',
  templateUrl: './notification-manager.component.html'
})
export class NotificationManagerComponent {
  constructor(private store: Store<AppState>) {}

  completeAll() {
    this.store.dispatch(completeAll());
  }
}
