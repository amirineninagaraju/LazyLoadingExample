import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajamendryComponent } from './rajamendry.component';

describe('RajamendryComponent', () => {
  let component: RajamendryComponent;
  let fixture: ComponentFixture<RajamendryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajamendryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RajamendryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
