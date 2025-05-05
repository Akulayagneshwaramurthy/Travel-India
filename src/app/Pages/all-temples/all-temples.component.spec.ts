import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTemplesComponent } from './all-temples.component';

describe('AllTemplesComponent', () => {
  let component: AllTemplesComponent;
  let fixture: ComponentFixture<AllTemplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTemplesComponent]
    });
    fixture = TestBed.createComponent(AllTemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
