import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastDataComponent } from './toast-data.component';

describe('ToastDataComponent', () => {
  let component: ToastDataComponent;
  let fixture: ComponentFixture<ToastDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
