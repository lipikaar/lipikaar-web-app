import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCopyrightComponent } from './app-copyright.component';

describe('AppCopyrightComponent', () => {
  let component: AppCopyrightComponent;
  let fixture: ComponentFixture<AppCopyrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCopyrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
