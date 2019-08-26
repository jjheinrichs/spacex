import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import * as fromLaunches from '@app/launches/state/launches.reducer';

export interface State {} // tslint:disable-line

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
