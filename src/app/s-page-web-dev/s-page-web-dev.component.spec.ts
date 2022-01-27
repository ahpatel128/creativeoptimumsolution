import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPageWebDevComponent } from './s-page-web-dev.component';

describe('SPageWebDevComponent', () => {
  let component: SPageWebDevComponent;
  let fixture: ComponentFixture<SPageWebDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPageWebDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPageWebDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
