import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AorticStentGraftComponent } from './aortic-stent-graft.component';

describe('AorticStentGraftComponent', () => {
  let component: AorticStentGraftComponent;
  let fixture: ComponentFixture<AorticStentGraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AorticStentGraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AorticStentGraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
