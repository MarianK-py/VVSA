import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAccountsListComponent } from './basic-accounts-list.component';

describe('BasicAccountsListComponent', () => {
  let component: BasicAccountsListComponent;
  let fixture: ComponentFixture<BasicAccountsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicAccountsListComponent],
    });
    fixture = TestBed.createComponent(BasicAccountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
