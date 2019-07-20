import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import * as fromLaunches from '../state/launches.reducer';
import { Launch } from '../models/launch';

@Component({
  selector: 'spacex-launch-list',
  templateUrl: './launch-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {
  launches$: Observable<any>;

  constructor( private store: Store<fromLaunches.LaunchesState> ) { }

  ngOnInit() {
    this.launches$ = this.store.pipe(select(fromLaunches.getLaunches));
  }

  trackByFlightNumber(index, launch: Launch): number {
    return launch.flight_number;
  }
}
