import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { Feature01StateEffects } from './feature01-state.effects';

describe('Feature01StateEffects', () => {
  let actions$: Observable<any>;
  let effects: Feature01StateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Feature01StateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(Feature01StateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
