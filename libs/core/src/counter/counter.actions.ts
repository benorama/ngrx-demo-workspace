import {Action} from '@ngrx/store';

export namespace CounterActions {

    export const Types = {
        INCREMENT: '[Counter] Increment',
        DECREMENT: '[Counter] Decrement',
        RESET: '[Counter] Reset',
        RESET_SUCCESS: '[Counter] ResetSucess'
    };

    export class IncrementAction implements Action {
        readonly type = Types.INCREMENT;
    }

    export class DecrementAction implements Action {
        readonly type = Types.DECREMENT;
    }

    export class ResetAction implements Action {
        readonly type = Types.RESET;
    }

    export class ResetSuccessAction implements Action {
        readonly type = Types.RESET_SUCCESS;
    }

    export type Actions =
        IncrementAction
        | DecrementAction
        | ResetAction
        | ResetSuccessAction;


}

