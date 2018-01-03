import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {DemoCoreModule} from '@ngrx-demo/core';

import {AppComponent} from './app.component';
import {HomePage} from '../pages/home/home';
import {reducers} from './app.reducer';
import {environment} from '@app/env';

@NgModule({
    declarations: [
        AppComponent,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(AppComponent),
        DemoCoreModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : []
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        AppComponent,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
