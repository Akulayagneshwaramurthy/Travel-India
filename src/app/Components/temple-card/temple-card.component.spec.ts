import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleCardComponent } from './temple-card.component';

describe('TempleCardComponent', () => {
  let component: TempleCardComponent;
  let fixture: ComponentFixture<TempleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempleCardComponent]
    });
    fixture = TestBed.createComponent(TempleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
