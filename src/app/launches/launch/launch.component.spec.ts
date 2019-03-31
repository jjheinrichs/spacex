import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { LaunchComponent } from './launch.component';

@Component({selector: 'spacex-launch-grid-number', template: ''})
class LaunchGridNumberStubComponent {}

@Component({selector: 'spacex-launch-grid-title', template: ''})
class LaunchGridTitleStubComponent {}

@Component({selector: 'spacex-launch-grid-description', template: ''})
class LaunchGridDescriptionStubComponent {}

describe('LaunchComponent', () => {
  let component: LaunchComponent;
  let fixture: ComponentFixture<LaunchComponent>;

  const expectedLaunch = {
    mission_name : 'mission name',
    flight_number : 1,
    launch_year : 1996,
    rocket_name : 'rocket',
    details : 'rocket fly high',
    presskit : 'https://www.spacex.com',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LaunchComponent,
        LaunchGridNumberStubComponent,
        LaunchGridTitleStubComponent,
        LaunchGridDescriptionStubComponent
      ],
      schemas : [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchComponent);
    component = fixture.componentInstance;

    component.launch = expectedLaunch;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
