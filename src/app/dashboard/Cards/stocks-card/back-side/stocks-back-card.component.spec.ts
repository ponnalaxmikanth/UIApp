import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksBackCardComponent } from './stocks-back-card.component';

describe('StocksBackCardComponent', () => {
  let component: StocksBackCardComponent;
  let fixture: ComponentFixture<StocksBackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksBackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksBackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
