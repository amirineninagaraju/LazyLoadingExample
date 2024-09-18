import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinelabreportsComponent } from './onlinelabreports.component';

describe('OnlinelabreportsComponent', () => {
  let component: OnlinelabreportsComponent;
  let fixture: ComponentFixture<OnlinelabreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinelabreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinelabreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
