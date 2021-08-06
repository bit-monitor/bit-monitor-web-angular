import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvancedSearchContainerComponent } from './advanced-search-container.component';

describe('AdvancedSearchContainerComponent', () => {
    let component: AdvancedSearchContainerComponent;
    let fixture: ComponentFixture<AdvancedSearchContainerComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AdvancedSearchContainerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdvancedSearchContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
