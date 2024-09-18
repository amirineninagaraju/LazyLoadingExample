import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteOfCardiacSciencesComponent } from './institute-of-cardiac-sciences.component';

describe('InstituteOfCardiacSciencesComponent', () => {
  let component: InstituteOfCardiacSciencesComponent;
  let fixture: ComponentFixture<InstituteOfCardiacSciencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteOfCardiacSciencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteOfCardiacSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
