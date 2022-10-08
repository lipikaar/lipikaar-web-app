import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPolicyComponent } from './app-policy.component';

describe('AppPolicyComponent', () => {
  let component: AppPolicyComponent;
  let fixture: ComponentFixture<AppPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
