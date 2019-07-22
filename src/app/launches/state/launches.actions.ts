import { Action } from '@ngrx/store';

import { Launch } from '@app/launches/models/launch';
import { Query } from '@angular/core';

export enum LaunchesActionTypes {
  GetLaunches = '[Launches] GetLaunches',
  GetLaunchesSuccess = '[Launches] GetLaunchesSuccess',
  GetLaunchesError = '[Launches] GetLaunchesError',
  SetOrder = '[Launches] SetOrder',
  SetOffset = '[Launches] SetOffset'
}

export class GetLaunches implements Action {
  readonly type = LaunchesActionTypes.GetLaunches;

  constructor(public payload: any) {}
}

export class GetLaunchesSuccess implements Action {
  readonly type = LaunchesActionTypes.GetLaunchesSuccess;

  constructor(public payload: any) {}
}

export class GetLaunchesError implements Action {
  readonly type = LaunchesActionTypes.GetLaunchesError;

  constructor(public payload: any) {}
}

export class SetOrder implements Action {
  readonly type = LaunchesActionTypes.SetOrder;

  constructor(public payload: string) {}
}

export class SetOffset implements Action {
  readonly type = LaunchesActionTypes.SetOffset;

  constructor(public payload: number) {}
}

export type LaunchesActions =
  | GetLaunches
  | GetLaunchesSuccess
  | GetLaunchesError
  | SetOrder
  | SetOffset;
