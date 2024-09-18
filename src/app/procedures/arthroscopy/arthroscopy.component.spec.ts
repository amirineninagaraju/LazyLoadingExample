import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthroscopyComponent } from './arthroscopy.component';

describe('ArthroscopyComponent', () => {
  let component: ArthroscopyComponent;
  let fixture: ComponentFixture<ArthroscopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArthroscopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthroscopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
