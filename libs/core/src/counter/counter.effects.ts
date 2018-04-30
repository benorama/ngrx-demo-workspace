import {Injectable} from '@angular/core';

import {Effect, Actions, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {map, tap} from 'rxjs/operators';

import {CounterActions} from './counter.actions';

@Injectable()
export class CounterEffects {

    constructor(private actions$: Actions) {
    }


    @Effect() resetSuccess$ = this.actions$.pipe(
        ofType(CounterActions.Types.RESET),
        map(() => new CounterActions.ResetSuccessAction())
    );

}
