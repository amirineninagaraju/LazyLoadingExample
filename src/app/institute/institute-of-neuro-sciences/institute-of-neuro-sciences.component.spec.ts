import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteOfNeuroSciencesComponent } from './institute-of-neuro-sciences.component';

describe('InstituteOfNeuroSciencesComponent', () => {
  let component: InstituteOfNeuroSciencesComponent;
  let fixture: ComponentFixture<InstituteOfNeuroSciencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteOfNeuroSciencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteOfNeuroSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
