import {Component} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {CounterActions} from '@ngrx-demo/core';
import {AppState} from './app.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    counter$: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter$ = this.store.select(s => s.counter.total);
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
