import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { CounterActions } from './counter.actions';

@Injectable()
export class CounterEffects {
    constructor(private actions$: Actions) {}

     resetSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(CounterActions.Types.RESET),
        map(() => new CounterActions.ResetSuccessAction())
    ));
}
