import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiltipleAvatarComponent } from './miltiple-avatar.component';

describe('MiltipleAvatarComponent', () => {
  let component: MiltipleAvatarComponent;
  let fixture: ComponentFixture<MiltipleAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiltipleAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiltipleAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
