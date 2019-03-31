import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import * as fromLaunches from './state/launches.reducer';
import { Pagination } from '@app/core/components/pagination/pagination';

@Component({
  selector: 'spacex-launches',
  templateUrl: './launches.component.html'
})
export class LaunchesComponent implements OnInit, OnDestroy {
  sortOrder: string;
  pagination: Pagination;
  private destroy$ = new Subject();
  isLoading: boolean;
  error: string;

  constructor(
    private store: Store<fromLaunches.LaunchesState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this
      .store
      .pipe(
        select(fromLaunches.getSortOrder),
        takeUntil(this.destroy$)
      )
      .subscribe((sortOrder) => {
        this.sortOrder = sortOrder;
        this.setScrolltop();
      });

    this
      .store
      .pipe(
        select(fromLaunches.getPagination),
        takeUntil(this.destroy$)
      )
      .subscribe((pagination: Pagination) => {
        this.pagination = pagination;
        this.setScrolltop();
      });

    this
      .store
      .pipe(
        select(fromLaunches.getLoading),
        takeUntil(this.destroy$)
      )
      .subscribe((isLoading: boolean) => {
        this.isLoading = isLoading;
      });

    this
      .store
      .pipe(
        select(fromLaunches.getError),
        takeUntil(this.destroy$)
      )
      .subscribe((error: string) => {
        this.error = error;
        this.setScrolltop();
      });
  }

  setScrolltop() {
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  setSort($event) {
    this.updateRoute({
      order: $event,
      offset: 0
    });
  }

  setOffset($event) {
    this.updateRoute({
      offset: $event
    });
  }

  updateRoute(queryParams) {
    this.router.navigate(
      [],
      {
        queryParams,
        queryParamsHandling: 'merge',
        relativeTo: this.activatedRoute
      }
    );

  }
}
