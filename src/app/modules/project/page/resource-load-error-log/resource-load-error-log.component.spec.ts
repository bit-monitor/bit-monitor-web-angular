import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResourceLoadErrorLogComponent } from './resource-load-error-log.component';

describe('ResourceLoadErrorLogComponent', () => {
  let component: ResourceLoadErrorLogComponent;
  let fixture: ComponentFixture<ResourceLoadErrorLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceLoadErrorLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceLoadErrorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
