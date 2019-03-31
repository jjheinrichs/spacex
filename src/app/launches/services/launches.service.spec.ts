import { TestBed } from '@angular/core/testing';

import { LaunchesService } from './launches.service';

import { sort } from '@app/core/components/sort/sort';
import { Launch } from '@app/launches/models/launch';

import { asyncData } from '@testing/async';

let httpClientSpy: { get: jasmine.Spy };
let launchesService: LaunchesService;

describe('LaunchesService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    launchesService = new LaunchesService(httpClientSpy as any);
  });

  it('should call get', () => {
    const params = {
      sort: sort.asc,
      start: 0
    };

    const expectedLaunches: Launch[] = [
      {
        mission_name : 'mission',
        flight_number : 1,
        launch_year : 2000,
        rocket_name : 'rocket',
        details : 'rocket fly high',
        presskit : 'https://www.spacex.com'
      }
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedLaunches));

    launchesService
      .getLaunches(params)
      .subscribe(
        launches => expect(launches).toBeTruthy(),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
