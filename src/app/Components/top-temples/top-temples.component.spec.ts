import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTemplesComponent } from './top-temples.component';

describe('TopTemplesComponent', () => {
  let component: TopTemplesComponent;
  let fixture: ComponentFixture<TopTemplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTemplesComponent]
    });
    fixture = TestBed.createComponent(TopTemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
