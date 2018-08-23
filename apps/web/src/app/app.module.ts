import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DemoCoreModule} from '@ngrx-demo/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NxModule} from '@nrwl/nx';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {reducers} from './app.reducer';

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
