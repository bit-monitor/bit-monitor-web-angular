import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JsErrorLogComponent } from './js-error-log.component';

describe('JsErrorLogComponent', () => {
  let component: JsErrorLogComponent;
  let fixture: ComponentFixture<JsErrorLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JsErrorLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsErrorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
