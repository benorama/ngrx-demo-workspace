import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NxModule} from '@nrwl/nx';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {DemoCoreModule} from '@ngrx-demo/core';

import {AppComponent} from './app.component';
import {reducers} from './app.reducer';
import {environment} from '../environments/environment';

@NgModule({
    imports: [
        BrowserModule,
        DemoCoreModule,
        NxModule.forRoot(),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : []
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
