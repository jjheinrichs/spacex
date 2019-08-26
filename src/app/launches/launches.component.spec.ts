import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { LaunchesComponent } from './launches.component';

import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { LaunchesEffects } from './state/launches.effects';
import { provideMockActions } from '@ngrx/effects/testing';

@Component({ selector: 'spacex-sort', template: '' })
class SortStubComponent {}

@Component({ selector: 'spacex-pagination', template: '' })
class PaginationStubComponent {}

@Component({ selector: 'spacex-launch-list', template: '' })
class LaunchListStubComponent {}

describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;

  let actions$: Observable<any>;

  let store: MockStore<{ loggedIn: boolean }>;
  const initialState = { loggedIn: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        LaunchesComponent,
        SortStubComponent,
        PaginationStubComponent,
        LaunchListStubComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        LaunchesEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$)
      ]
    }).compileComponents();

    actions$ = of();
    store = TestBed.get(Store);
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
