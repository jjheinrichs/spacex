import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Action, Store, select, State } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import {
  map,
  switchMap,
  catchError,
  withLatestFrom
} from 'rxjs/operators';

import * as launches from './launches.actions';
import * as fromLaunches from './launches.reducer';

import { LaunchesService } from '../services/launches.service';

@Injectable()
export class LaunchesEffects {
  constructor(
    private actions$: Actions,
    private launchesService: LaunchesService,
    private store: Store<fromLaunches.LaunchesState>
  ) {}

  @Effect()
  getLaunches$: Observable<Action>
    = this
        .actions$
        .pipe(
          ofType<launches.GetLaunches>(launches.LaunchesActionTypes.GetLaunches),
          map(action => action.payload),
          withLatestFrom(this.store),
          switchMap(state => {
            const launchesState = state[1].launches as any;

            return this
              .launchesService
              .getLaunches(launchesState.params)
              .pipe(
                map((queryResults) => {
                  return new launches.GetLaunchesSuccess(queryResults);
                }),
                catchError(error => of(new launches.GetLaunchesError(error.statusText)))
              );
          })
        );

  @Effect()
  routeToLaunches$: Observable<{}>
    = this
        .actions$
        .pipe(
          ofType<launches.GetLaunches>(ROUTER_NAVIGATION),
          map(action => {
            const routeQueryParams = {...action.payload.routerState.root.queryParams};

            this.store.dispatch(new launches.SetOrder(routeQueryParams.order));
            this.store.dispatch(new launches.SetOffset(parseInt(routeQueryParams.offset, 10)));

            return new launches.GetLaunches(true);
          })
      );
}
