import {Component} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {CounterActions} from '@ngrx-demo/core';
import {AppState} from '../../app/app.state';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    counter$: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter$ = this.store.pipe(select('counter', 'total'));
    }

    decrement() {
        this.store.dispatch(new CounterActions.DecrementAction());
    }

    increment() {
        this.store.dispatch(new CounterActions.IncrementAction());
    }

    reset() {
        this.store.dispatch(new CounterActions.ResetAction());
    }

}
