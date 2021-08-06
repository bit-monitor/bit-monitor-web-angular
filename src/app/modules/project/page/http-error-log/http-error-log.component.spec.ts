import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpErrorLogComponent } from './http-error-log.component';

describe('HttpErrorLogComponent', () => {
  let component: HttpErrorLogComponent;
  let fixture: ComponentFixture<HttpErrorLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpErrorLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpErrorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
