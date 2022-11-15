import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeature01State from './feature01-state.reducer';

export const selectFeature01StateState = createFeatureSelector<fromFeature01State.State>(
  fromFeature01State.feature01StateFeatureKey
);
