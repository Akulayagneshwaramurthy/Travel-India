import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianTemplesComponent } from './indian-temples.component';

describe('IndianTemplesComponent', () => {
  let component: IndianTemplesComponent;
  let fixture: ComponentFixture<IndianTemplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndianTemplesComponent]
    });
    fixture = TestBed.createComponent(IndianTemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
