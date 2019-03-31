import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Action, Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import {
  map,
  switchMap,
  catchError
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
  routeToLaunches$: Observable<{}>
    = this
        .actions$
        .pipe(
          ofType<launches.GetLaunches>(ROUTER_NAVIGATION),
          map(action => action),
          switchMap(action => {
            const routeQueryParams = {...action.payload.routerState.root.queryParams};

            this.store.dispatch(new launches.SetOrder(routeQueryParams.order));
            this.store.dispatch(new launches.SetOffset(parseInt(routeQueryParams.offset, 10)));

            return this
              .store
              .pipe(
                select(fromLaunches.getParams),
                switchMap((queryParams) => {
                  return this
                    .launchesService
                    .getLaunches(queryParams)
                    .pipe(
                      map((queryResults) => {
                        return new launches.GetLaunchesSuccess(queryResults);
                      }),
                      catchError(error => of(new launches.GetLaunchesError(error)))
                    );
                })
              );
          })
      );
}
