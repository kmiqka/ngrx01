import { createAction, props } from '@ngrx/store';

export const loadFeature01States = createAction(
  '[Feature01State] Load Feature01States'
);

export const loadFeature01StatesSuccess = createAction(
  '[Feature01State] Load Feature01States Success',
  props<{ data: any }>()
);

export const loadFeature01StatesFailure = createAction(
  '[Feature01State] Load Feature01States Failure',
  props<{ error: any }>()
);
