import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortComponent } from './sort.component';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;

    component.sortOrder = 'asc';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
