import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { Pagination } from './pagination';

@Component({
  selector: 'spacex-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnChanges {
  @Output() setOffset = new EventEmitter<number>();
  @Input() pagination: Pagination;

  totalPages: number;
  currentPage: number;
  limit: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const pagination = changes.pagination.currentValue;
    this.limit = pagination.limit;

    this.totalPages = Math.ceil(pagination.count / pagination.limit);
    this.currentPage = Math.min(
      Math.floor(pagination.offset / pagination.limit) + 1,
      this.totalPages
    );
  }

  handleNextClick() {
    const nextOffset = this.currentPage * this.limit;

    this.setOffset.emit(nextOffset);
  }

  handlePreviousClick() {
    const previousOffset = (this.currentPage - 2) * this.limit;

    this.setOffset.emit(previousOffset);
  }
}
