import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {StoreModule} from '@ngrx/store';
import {DataPersistence} from '@nrwl/nx';
import {CounterEffects} from './counter.effects';

describe('CounterEffects', () => {
    let actions;
    let effects: CounterEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [CounterEffects, DataPersistence, provideMockActions(() => actions)]
        });

        effects = TestBed.get(CounterEffects);
    });

    /*describe('someEffect', () => {
        it('should work', async () => {
            actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
            expect(await readAll(effects.loadData)).toEqual([{ type: 'DATA_LOADED', payload: {} }]);
        });
    });*/
});
