import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTouristPlaceComponent } from './top-tourist-place.component';

describe('TopTouristPlaceComponent', () => {
  let component: TopTouristPlaceComponent;
  let fixture: ComponentFixture<TopTouristPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTouristPlaceComponent]
    });
    fixture = TestBed.createComponent(TopTouristPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
