import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundrabadComponent } from './secundrabad.component';

describe('SecundrabadComponent', () => {
  let component: SecundrabadComponent;
  let fixture: ComponentFixture<SecundrabadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecundrabadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundrabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
