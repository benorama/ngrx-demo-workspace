import {CounterActions} from './counter.actions';
import {counterInitialState, CounterState} from './counter.state';

export function counterReducer(state = counterInitialState, action: CounterActions.Actions): CounterState {
    switch (action.type) {

        case CounterActions.Types.INCREMENT:
            return {
                ...state,
                total: state.total + 1
            };

        case CounterActions.Types.DECREMENT:
            return {
                ...state,
                total: state.total - 1
            };

        case CounterActions.Types.RESET_SUCCESS:
            return counterInitialState;


        default: {
            return state;
        }
    }
}
