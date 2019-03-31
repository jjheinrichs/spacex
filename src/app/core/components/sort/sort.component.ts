import { Component, Output, EventEmitter, OnChanges, Input } from '@angular/core';
import { sort } from './sort';

@Component({
  selector: 'spacex-sort',
  templateUrl: './sort.component.html'
})
export class SortComponent implements OnChanges {
  @Output() setSort = new EventEmitter<string>();
  @Input() sortOrder: string;

  sortIndex: number;
  sortKeys = Object.keys(sort);

  constructor() { }

  ngOnChanges(changes) {
    this.sortIndex = this.sortKeys.findIndex(key => key === changes.sortOrder.currentValue);
  }

  toggleSort() {
    this.sortIndex = (this.sortIndex + 1) % this.sortKeys.length;
    this.setSort.emit(sort[this.sortKeys[this.sortIndex]]);
  }

  get sortOrderString() {
    return sort[this.sortKeys[this.sortIndex]];
  }
}
