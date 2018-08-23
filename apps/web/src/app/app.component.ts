import {Component, HostBinding} from '@angular/core';

import {CounterActions, CounterState} from '@ngrx-demo/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from './app.state';

@Component({
    selector: 'ngrx-demo-web',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @HostBinding('attr.class') class = 'mx-auto';

    counter$: Observable<CounterState>;

    constructor(private store: Store<AppState>) {
        this.counter$ = this.store.pipe(select('counter'));
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
