import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoticComponent } from './botic.component';

describe('BoticComponent', () => {
  let component: BoticComponent;
  let fixture: ComponentFixture<BoticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
