import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCouplesComponent } from './top-couples.component';

describe('TopCouplesComponent', () => {
  let component: TopCouplesComponent;
  let fixture: ComponentFixture<TopCouplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopCouplesComponent]
    });
    fixture = TestBed.createComponent(TopCouplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
