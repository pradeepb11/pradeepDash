import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutdashboardComponent } from './payoutdashboard.component';

describe('PayoutdashboardComponent', () => {
  let component: PayoutdashboardComponent;
  let fixture: ComponentFixture<PayoutdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoutdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoutdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
