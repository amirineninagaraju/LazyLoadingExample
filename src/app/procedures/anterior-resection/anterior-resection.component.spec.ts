import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteriorResectionComponent } from './anterior-resection.component';

describe('AnteriorResectionComponent', () => {
  let component: AnteriorResectionComponent;
  let fixture: ComponentFixture<AnteriorResectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnteriorResectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteriorResectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
