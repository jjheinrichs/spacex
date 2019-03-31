import { Component, Input } from '@angular/core';

@Component({
  selector: 'spacex-launch-grid-title',
  templateUrl: './launch-grid-title.component.html'
})
export class LaunchGridTitleComponent {
  @Input() gridCellHeader: string;
  @Input() gridCellTitle: string;

  constructor() { }
}
