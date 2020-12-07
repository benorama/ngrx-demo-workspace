import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';

describe('MyComponentComponent', () => {
    let component: MyComponentComponent;
    let fixture: ComponentFixture<MyComponentComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MyComponentComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
