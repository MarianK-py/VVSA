import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalDetailComponent } from './withdrawal-detail.component';

describe('WithdrawalDetailComponent', () => {
  let component: WithdrawalDetailComponent;
  let fixture: ComponentFixture<WithdrawalDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawalDetailComponent]
    });
    fixture = TestBed.createComponent(WithdrawalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
