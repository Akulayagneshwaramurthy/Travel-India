import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCouplesComponent } from './all-couples.component';

describe('AllCouplesComponent', () => {
  let component: AllCouplesComponent;
  let fixture: ComponentFixture<AllCouplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCouplesComponent]
    });
    fixture = TestBed.createComponent(AllCouplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
