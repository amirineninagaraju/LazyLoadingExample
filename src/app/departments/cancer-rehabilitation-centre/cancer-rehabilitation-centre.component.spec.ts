import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerRehabilitationCentreComponent } from './cancer-rehabilitation-centre.component';

describe('CancerRehabilitationCentreComponent', () => {
  let component: CancerRehabilitationCentreComponent;
  let fixture: ComponentFixture<CancerRehabilitationCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancerRehabilitationCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerRehabilitationCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
