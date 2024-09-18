import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteOfHeartLungTransplantationComponent } from './institute-of-heart-lung-transplantation.component';

describe('InstituteOfHeartLungTransplantationComponent', () => {
  let component: InstituteOfHeartLungTransplantationComponent;
  let fixture: ComponentFixture<InstituteOfHeartLungTransplantationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteOfHeartLungTransplantationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteOfHeartLungTransplantationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
