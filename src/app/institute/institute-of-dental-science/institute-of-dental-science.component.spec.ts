import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteOfDentalScienceComponent } from './institute-of-dental-science.component';

describe('InstituteOfDentalScienceComponent', () => {
  let component: InstituteOfDentalScienceComponent;
  let fixture: ComponentFixture<InstituteOfDentalScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteOfDentalScienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteOfDentalScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
