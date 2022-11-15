import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as Feature01StateActions from './feature01-state.actions';


@Injectable()
export class Feature01StateEffects {

  loadFeature01States$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(Feature01StateActions.loadFeature01States),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => Feature01StateActions.loadFeature01StatesSuccess({ data })),
          catchError(error => of(Feature01StateActions.loadFeature01StatesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
