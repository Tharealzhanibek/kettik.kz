import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTopComponent } from './app-top.component';

describe('AppTopComponent', () => {
  let component: AppTopComponent;
  let fixture: ComponentFixture<AppTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
