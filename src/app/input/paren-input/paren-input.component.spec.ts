import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenInputComponent } from './paren-input.component';

describe('ParenInputComponent', () => {
  let component: ParenInputComponent;
  let fixture: ComponentFixture<ParenInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
