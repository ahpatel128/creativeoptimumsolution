import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPageDataComponent } from './s-page-data.component';

describe('SPageDataComponent', () => {
  let component: SPageDataComponent;
  let fixture: ComponentFixture<SPageDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPageDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
