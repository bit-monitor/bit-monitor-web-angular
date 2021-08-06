import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlarmRecordComponent } from './alarm-record.component';

describe('AlarmRecordComponent', () => {
    let component: AlarmRecordComponent;
    let fixture: ComponentFixture<AlarmRecordComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AlarmRecordComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AlarmRecordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
