import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {counterReducer} from './counter/counter.reducer';
import {counterInitialState} from './counter/counter.state';
import {CounterEffects} from './counter/counter.effects';
import {MyComponentComponent} from './my-component/my-component.component';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('counter', counterReducer, {initialState: counterInitialState}),
        EffectsModule.forFeature([CounterEffects])
    ],
    providers: [CounterEffects],
    declarations: [MyComponentComponent]
})
export class DemoCoreModule {
}
