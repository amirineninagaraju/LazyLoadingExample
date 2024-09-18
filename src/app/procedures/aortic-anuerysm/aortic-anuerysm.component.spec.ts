import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AorticAnuerysmComponent } from './aortic-anuerysm.component';

describe('AorticAnuerysmComponent', () => {
  let component: AorticAnuerysmComponent;
  let fixture: ComponentFixture<AorticAnuerysmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AorticAnuerysmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AorticAnuerysmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
