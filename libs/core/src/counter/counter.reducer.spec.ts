import {CounterActions} from './counter.actions';
import {counterReducer} from './counter.reducer';
import {counterInitialState, CounterState} from './counter.state';

describe('counterReducer', () => {
    it('should increment', () => {
        const state: CounterState = counterInitialState;
        const action: CounterActions.IncrementAction = new CounterActions.IncrementAction();
        const actual = counterReducer(state, action);
        expect(actual).toEqual({total: 1});
    });
});
