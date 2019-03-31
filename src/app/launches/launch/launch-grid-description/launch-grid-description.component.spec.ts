import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchGridDescriptionComponent } from './launch-grid-description.component';

describe('LaunchGridDescriptionComponent', () => {
  let component: LaunchGridDescriptionComponent;
  let fixture: ComponentFixture<LaunchGridDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchGridDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchGridDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
