import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlarmNotifyRecordComponent } from './alarm-notify-record.component';

describe('AlarmNotifyRecordComponent', () => {
    let component: AlarmNotifyRecordComponent;
    let fixture: ComponentFixture<AlarmNotifyRecordComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AlarmNotifyRecordComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AlarmNotifyRecordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
