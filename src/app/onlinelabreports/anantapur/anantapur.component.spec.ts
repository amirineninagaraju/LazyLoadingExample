import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnantapurComponent } from './anantapur.component';

describe('AnantapurComponent', () => {
  let component: AnantapurComponent;
  let fixture: ComponentFixture<AnantapurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnantapurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnantapurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
