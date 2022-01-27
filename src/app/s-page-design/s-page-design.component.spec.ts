import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPageDesignComponent } from './s-page-design.component';

describe('SPageDesignComponent', () => {
  let component: SPageDesignComponent;
  let fixture: ComponentFixture<SPageDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPageDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPageDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
