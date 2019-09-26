import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsFrontCardComponent } from './accounts-front-card.component';

describe('AccountsFrontCardComponent', () => {
  let component: AccountsFrontCardComponent;
  let fixture: ComponentFixture<AccountsFrontCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsFrontCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsFrontCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
