import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LogDetailComponent } from './log-detail.component';

describe('LogDetailComponent', () => {
    let component: LogDetailComponent;
    let fixture: ComponentFixture<LogDetailComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LogDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LogDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
