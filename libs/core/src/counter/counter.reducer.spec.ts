import {counterReducer} from './counter.reducer';
import {CounterState, counterInitialState} from './counter.state';
import {IncrementAction} from './counter.actions';

describe('counterReducer', () => {
    it('should increment', () => {
        const state: CounterState = counterInitialState;
        const action: IncrementAction = new IncrementAction();
        const actual = counterReducer(state, action);
        expect(actual).toEqual({total: 1});
    });
});
