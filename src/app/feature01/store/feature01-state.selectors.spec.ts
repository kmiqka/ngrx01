import * as fromFeature01State from './feature01-state.reducer';
import { selectFeature01StateState } from './feature01-state.selectors';

describe('Feature01State Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFeature01StateState({
      [fromFeature01State.feature01StateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
