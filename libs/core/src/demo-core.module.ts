import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CounterEffects} from './counter/counter.effects';

import {counterReducer} from './counter/counter.reducer';
import {counterInitialState} from './counter/counter.state';
import {MyComponentComponent} from './my-component/my-component.component';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('counter', counterReducer, {initialState: counterInitialState}),
        EffectsModule.forFeature([CounterEffects])
    ],
    providers: [CounterEffects],
    declarations: [MyComponentComponent],
    exports: [MyComponentComponent]
})
export class DemoCoreModule {
}
