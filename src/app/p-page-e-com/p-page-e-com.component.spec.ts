import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPageEComComponent } from './p-page-e-com.component';

describe('PPageEComComponent', () => {
  let component: PPageEComComponent;
  let fixture: ComponentFixture<PPageEComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPageEComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPageEComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
