import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomErrorLogComponent } from './custom-error-log.component';

describe('CustomErrorLogComponent', () => {
  let component: CustomErrorLogComponent;
  let fixture: ComponentFixture<CustomErrorLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomErrorLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomErrorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
