import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCurrencyCardComponent } from './digital-currency-card.component';

describe('DigitalCurrencyCardComponent', () => {
  let component: DigitalCurrencyCardComponent;
  let fixture: ComponentFixture<DigitalCurrencyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalCurrencyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalCurrencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
