import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesHistoryCardComponent } from './expenses-history-card.component';

describe('ExpensesHistoryCardComponent', () => {
  let component: ExpensesHistoryCardComponent;
  let fixture: ComponentFixture<ExpensesHistoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesHistoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
