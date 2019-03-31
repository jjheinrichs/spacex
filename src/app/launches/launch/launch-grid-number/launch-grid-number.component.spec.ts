import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchGridNumberComponent } from './launch-grid-number.component';

describe('LaunchGridNumberComponent', () => {
  let component: LaunchGridNumberComponent;
  let fixture: ComponentFixture<LaunchGridNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchGridNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchGridNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
