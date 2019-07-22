import { LaunchesActionTypes, LaunchesActions } from './launches.actions';

import { Launch } from '../models/launch';
import { sort } from '@app/core/components/sort/sort';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Pagination } from '@app/core/components/pagination/pagination';

const QUERY_LIMIT = 10;
const SORT_BY = 'flight_number';

export interface LaunchesState {
  loading: boolean;
  error: string;
  launches: Launch[];
  count: number;
  params: {
    offset: number;
    limit: number;
    order: string;
    sort: string;
  };
}

export const initialState: LaunchesState = {
  loading: false,
  error: '',
  launches: [],
  count: 0,
  params: {
    offset: 0,
    limit: QUERY_LIMIT,
    order: sort.asc,
    sort: SORT_BY
  }
};

function orderParamIsValid(order: string): boolean {
  return sort[order] !== undefined;
}

function offsetParamIsValid(offset: any) {
  return Number.isInteger(offset) && offset >= 0;
}

export function reducer(
  state = initialState,
  action: LaunchesActions
): LaunchesState {
  switch (action.type) {
    case LaunchesActionTypes.SetOrder:
      if (orderParamIsValid(action.payload)) {
        return {
          ...state,
          params: {
            ...state.params,
            order: action.payload
          }
        };
      } else {
        return state;
      }
    case LaunchesActionTypes.SetOffset:
      if (offsetParamIsValid(action.payload)) {
        return {
          ...state,
          params: {
            ...state.params,
            offset: action.payload
          }
        };
      } else {
        return state;
      }
    case LaunchesActionTypes.GetLaunches:
      return {
        ...state,
        loading: true,
        launches: [],
        error: '',
        params: {
          ...state.params
        }
      };
    case LaunchesActionTypes.GetLaunchesSuccess:
      return {
        ...state,
        loading: false,
        count: parseInt(action.payload.headers.get('spacex-api-count'), 10),
        launches: action.payload.body.map(
          (launch: any): Launch => {
            return {
              mission_name: launch.mission_name,
              flight_number: parseInt(launch.flight_number, 10),
              launch_year: parseInt(launch.launch_year, 10),
              rocket_name: launch.rocket.rocket_name,
              details: launch.details,
              presskit: launch.links.presskit
            };
          }
        )
      };
    case LaunchesActionTypes.GetLaunchesError:
      return {
        ...state,
        loading: false,
        error: action.payload,
        launches: [],
        params: {
          ...state.params
        }
      };
    default:
      return state;
  }
}

const loading = (state: LaunchesState) => state.loading;

const error = (state: LaunchesState) => state.error;

const params = (state: LaunchesState) => state.params;

const sortOrder = (state: LaunchesState) => state.params.order;

const launches = (state: LaunchesState) => state.launches;

const pagination = (state: LaunchesState): Pagination => {
  return {
    count: state.count,
    offset: state.params.offset,
    limit: state.params.limit
  };
};

const getLaunchesState = createFeatureSelector<LaunchesState>('launches');

export const getLoading = createSelector(
  getLaunchesState,
  loading
);

export const getError = createSelector(
  getLaunchesState,
  error
);

export const getParams = createSelector(
  getLaunchesState,
  params
);

export const getLaunches = createSelector(
  getLaunchesState,
  launches
);

export const getPagination = createSelector(
  getLaunchesState,
  pagination
);

export const getSortOrder = createSelector(
  getLaunchesState,
  sortOrder
);
