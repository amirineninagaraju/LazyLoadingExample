import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteOfGastroenterologyHepatologyComponent } from './institute-of-gastroenterology-hepatology.component';

describe('InstituteOfGastroenterologyHepatologyComponent', () => {
  let component: InstituteOfGastroenterologyHepatologyComponent;
  let fixture: ComponentFixture<InstituteOfGastroenterologyHepatologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteOfGastroenterologyHepatologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteOfGastroenterologyHepatologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
