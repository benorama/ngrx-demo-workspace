import {Injectable} from '@angular/core';

import {Effect, Actions} from '@ngrx/effects';
import {Action} from "@ngrx/store";
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/of';

import {CounterActions} from './counter.actions';

@Injectable()
export class CounterEffects {

    constructor(private actions$: Actions) {
    }


    @Effect() resetSuccess$: Observable<Action> = this.actions$
        .ofType(CounterActions.Types.RESET)
        .map(() => {
            return new CounterActions.ResetSuccessAction();
        });

}
