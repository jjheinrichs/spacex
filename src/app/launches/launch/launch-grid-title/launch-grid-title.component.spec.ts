import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchGridTitleComponent } from './launch-grid-title.component';

describe('LaunchGridTitleComponent', () => {
  let component: LaunchGridTitleComponent;
  let fixture: ComponentFixture<LaunchGridTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchGridTitleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchGridTitleComponent);
    component = fixture.componentInstance;

    component.gridCellHeader = '';
    component.gridCellTitle = '';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
