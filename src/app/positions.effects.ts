import { Injectable } from '@angular/core';
import {
  Actions,
  ROOT_EFFECTS_INIT,
  createEffect,
  ofType
} from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { PositionState, positionsReceived } from './positions.state';

const initialPositions: PositionState = {
  currentPositions: [
    'Copier',
    'Secretary to Customer Design Spec Engineer',
    'Tester',
    'Phone Bank Worker'
  ],
  newPositions: ['Manager', 'Break Room Attendant']
};

@Injectable()
export class PositionsEffects {
  constructor(private actions$: Actions) {}

  // ROOT_EFFECTS_INIT is a special action that is dispatched at the end of
  // NgRx's initialization process, so this effect executes at application
  // initialization.
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => positionsReceived({ positions: initialPositions }))
    )
  );
}
