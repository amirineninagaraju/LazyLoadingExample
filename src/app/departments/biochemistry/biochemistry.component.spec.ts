import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiochemistryComponent } from './biochemistry.component';

describe('BiochemistryComponent', () => {
  let component: BiochemistryComponent;
  let fixture: ComponentFixture<BiochemistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiochemistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiochemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
