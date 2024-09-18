import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyAndInnovationComponent } from './technology-and-innovation.component';

describe('TechnologyAndInnovationComponent', () => {
  let component: TechnologyAndInnovationComponent;
  let fixture: ComponentFixture<TechnologyAndInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyAndInnovationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyAndInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
