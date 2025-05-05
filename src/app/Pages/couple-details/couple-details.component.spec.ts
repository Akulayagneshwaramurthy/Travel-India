import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleDetailsComponent } from './couple-details.component';

describe('CoupleDetailsComponent', () => {
  let component: CoupleDetailsComponent;
  let fixture: ComponentFixture<CoupleDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoupleDetailsComponent]
    });
    fixture = TestBed.createComponent(CoupleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
