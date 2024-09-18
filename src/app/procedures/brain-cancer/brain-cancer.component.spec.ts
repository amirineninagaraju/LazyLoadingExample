import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainCancerComponent } from './brain-cancer.component';

describe('BrainCancerComponent', () => {
  let component: BrainCancerComponent;
  let fixture: ComponentFixture<BrainCancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainCancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
