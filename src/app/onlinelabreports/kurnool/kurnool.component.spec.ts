import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurnoolComponent } from './kurnool.component';

describe('KurnoolComponent', () => {
  let component: KurnoolComponent;
  let fixture: ComponentFixture<KurnoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurnoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurnoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
