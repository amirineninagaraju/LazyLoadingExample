import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalPatientsComponent } from './international-patients.component';

describe('InternationalPatientsComponent', () => {
  let component: InternationalPatientsComponent;
  let fixture: ComponentFixture<InternationalPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
