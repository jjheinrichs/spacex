import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { LaunchListComponent } from './launch-list.component';

import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

@Component({selector: 'spacex-launch', template: ''})
class LaunchStubComponent {}

describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  let actions$: Observable<any>;
  let store: MockStore<{ loading: boolean }>;
  const initialState = { loading: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchListComponent, LaunchStubComponent ],
      schemas : [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
      ]
    })
    .compileComponents();

    store = TestBed.get(Store);
    actions$ = of();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
