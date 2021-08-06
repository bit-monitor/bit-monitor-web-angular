import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserRegisterAuditComponent } from './user-register-audit.component';

describe('UserRegisterAuditComponent', () => {
  let component: UserRegisterAuditComponent;
  let fixture: ComponentFixture<UserRegisterAuditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegisterAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
