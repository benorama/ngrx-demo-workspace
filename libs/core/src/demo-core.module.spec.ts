import {async, TestBed} from '@angular/core/testing';
import {DemoCoreModule} from './demo-core.module';

describe('CoreModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [DemoCoreModule]
        }).compileComponents();
    }));

    it('should create', () => {
        expect(DemoCoreModule).toBeDefined();
    });
});
