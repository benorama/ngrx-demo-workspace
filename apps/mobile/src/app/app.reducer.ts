import {ActionReducerMap} from '@ngrx/store';
import {counterReducer} from '@ngrx-demo/core';
import {AppState} from './app.state';

export const reducers: ActionReducerMap<AppState> = {
    counter: counterReducer
};
