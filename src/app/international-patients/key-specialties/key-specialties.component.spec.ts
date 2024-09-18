import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySpecialtiesComponent } from './key-specialties.component';

describe('KeySpecialtiesComponent', () => {
  let component: KeySpecialtiesComponent;
  let fixture: ComponentFixture<KeySpecialtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeySpecialtiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeySpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
