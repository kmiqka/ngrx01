import { Action, createReducer, on } from '@ngrx/store';
import * as Feature01StateActions from './feature01-state.actions';

export const feature01StateFeatureKey = 'feature01State';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(Feature01StateActions.loadFeature01States, state => state),
  on(Feature01StateActions.loadFeature01StatesSuccess, (state, action) => state),
  on(Feature01StateActions.loadFeature01StatesFailure, (state, action) => state),

);
