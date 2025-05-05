import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTouristPlacePageComponent } from './top-tourist-place-page.component';

describe('TopTouristPlacePageComponent', () => {
  let component: TopTouristPlacePageComponent;
  let fixture: ComponentFixture<TopTouristPlacePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTouristPlacePageComponent]
    });
    fixture = TestBed.createComponent(TopTouristPlacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
