import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingIconsComponent } from './landing-icons.component';

describe('LandingIconsComponent', () => {
  let component: LandingIconsComponent;
  let fixture: ComponentFixture<LandingIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
