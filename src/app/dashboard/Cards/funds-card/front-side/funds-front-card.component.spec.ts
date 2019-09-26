import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsFrontCardComponent } from './funds-front-card.component';

describe('FundsFrontCardComponent', () => {
  let component: FundsFrontCardComponent;
  let fixture: ComponentFixture<FundsFrontCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsFrontCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsFrontCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
