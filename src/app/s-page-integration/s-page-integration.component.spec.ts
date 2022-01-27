import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPageIntegrationComponent } from './s-page-integration.component';

describe('SPageIntegrationComponent', () => {
  let component: SPageIntegrationComponent;
  let fixture: ComponentFixture<SPageIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPageIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPageIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
