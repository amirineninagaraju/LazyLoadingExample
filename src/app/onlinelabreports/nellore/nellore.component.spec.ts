import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NelloreComponent } from './nellore.component';

describe('NelloreComponent', () => {
  let component: NelloreComponent;
  let fixture: ComponentFixture<NelloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NelloreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NelloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
