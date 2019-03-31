import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { LaunchesComponent } from './launches.component';

@Component({selector: 'spacex-sort', template: ''})
class SortStubComponent {}

@Component({selector: 'spacex-pagination', template: ''})
class PaginationStubComponent {}

@Component({selector: 'spacex-launch-list', template: ''})
class LaunchListStubComponent {}

describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LaunchesComponent,
        SortStubComponent,
        PaginationStubComponent,
        LaunchListStubComponent
      ],
      schemas : [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
