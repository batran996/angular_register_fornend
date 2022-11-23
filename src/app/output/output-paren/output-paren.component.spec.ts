import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputParenComponent } from './output-paren.component';

describe('OutputParenComponent', () => {
  let component: OutputParenComponent;
  let fixture: ComponentFixture<OutputParenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputParenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputParenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
