import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksFrontCardComponent } from './stocks-front-card.component';

describe('StocksFrontCardComponent', () => {
  let component: StocksFrontCardComponent;
  let fixture: ComponentFixture<StocksFrontCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksFrontCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksFrontCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
