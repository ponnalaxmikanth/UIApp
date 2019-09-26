import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsBackCardComponent } from './accounts-back-card.component';

describe('AccountsBackCardComponent', () => {
  let component: AccountsBackCardComponent;
  let fixture: ComponentFixture<AccountsBackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsBackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsBackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
