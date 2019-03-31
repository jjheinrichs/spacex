import { Component, Input } from '@angular/core';

@Component({
  selector: 'spacex-launch-grid-number',
  templateUrl: './launch-grid-number.component.html'
})
export class LaunchGridNumberComponent {
  @Input() gridCellHeader: string;
  @Input() gridCellNumber: number;

  constructor() { }
}
