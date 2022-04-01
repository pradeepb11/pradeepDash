import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysuccesfullyComponent } from './paysuccesfully.component';

describe('PaysuccesfullyComponent', () => {
  let component: PaysuccesfullyComponent;
  let fixture: ComponentFixture<PaysuccesfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysuccesfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysuccesfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
