import { TestBed, waitForAsync } from '@angular/core/testing';
import { DemoCoreModule } from './demo-core.module';

describe('CoreModule', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [DemoCoreModule]
        }).compileComponents();
    }));

    it('should create', () => {
        expect(DemoCoreModule).toBeDefined();
    });
});
