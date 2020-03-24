import { ActionReducerMap } from '@ngrx/store';

import { employeeReducer } from './employees.state';
import { positionReducer } from './positions.state';
import { AppState } from './state';

export const reducers: ActionReducerMap<AppState> = {
  employees: employeeReducer,
  positions: positionReducer
};
