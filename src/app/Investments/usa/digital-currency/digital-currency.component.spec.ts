import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCurrencyComponent } from './digital-currency.component';

describe('DigitalCurrencyComponent', () => {
  let component: DigitalCurrencyComponent;
  let fixture: ComponentFixture<DigitalCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
