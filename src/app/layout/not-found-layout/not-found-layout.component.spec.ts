import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotFoundLayoutComponent } from './not-found-layout.component';

describe('NotFoundLayoutComponent', () => {
    let component: NotFoundLayoutComponent;
    let fixture: ComponentFixture<NotFoundLayoutComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [NotFoundLayoutComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotFoundLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
