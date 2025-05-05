import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGuidesComponent } from './travel-guides.component';

describe('TravelGuidesComponent', () => {
  let component: TravelGuidesComponent;
  let fixture: ComponentFixture<TravelGuidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelGuidesComponent]
    });
    fixture = TestBed.createComponent(TravelGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
