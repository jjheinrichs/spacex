import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { LaunchesService } from '../services/launches.service';
import { LaunchesEffects } from './launches.effects';

import { launches } from '@testing/launches';

import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('LaunchesEffects', () => {
  let actions$: Observable<any>;
  let effects: LaunchesEffects;

  let store: MockStore<{ loggedIn: boolean }>;
  const initialState = { loggedIn: false };

  let getQuoteSpy;

  beforeEach(() => {
    const launchesService = jasmine.createSpyObj('LaunchesService', ['getLaunches']);
    getQuoteSpy = launchesService.getLaunches.and.returnValue( of(launches) );

    TestBed.configureTestingModule({
      providers: [
        LaunchesEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
        { provide: LaunchesService, useValue: launchesService }
      ]
    });

    actions$ = of();
    store = TestBed.get(Store);
    effects = TestBed.get(LaunchesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
