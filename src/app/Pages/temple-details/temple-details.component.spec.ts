import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleDetailsComponent } from './temple-details.component';

describe('TempleDetailsComponent', () => {
  let component: TempleDetailsComponent;
  let fixture: ComponentFixture<TempleDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempleDetailsComponent]
    });
    fixture = TestBed.createComponent(TempleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
