import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination/pagination.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  declarations: [PaginationComponent, SortComponent],
  imports: [CommonModule],
  exports: [PaginationComponent, SortComponent]
})
export class CoreComponentsModule {}
