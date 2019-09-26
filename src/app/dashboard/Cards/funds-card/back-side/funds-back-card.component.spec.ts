import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsBackCardComponent } from './funds-back-card.component';

describe('FundsBackCardComponent', () => {
  let component: FundsBackCardComponent;
  let fixture: ComponentFixture<FundsBackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsBackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsBackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
