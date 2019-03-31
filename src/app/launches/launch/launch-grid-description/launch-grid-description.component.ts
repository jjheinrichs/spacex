import { Component, Input } from '@angular/core';

@Component({
  selector: 'spacex-launch-grid-description',
  templateUrl: './launch-grid-description.component.html'
})
export class LaunchGridDescriptionComponent {
  @Input() gridCellHeader: string;
  @Input() gridCellDescription: string;

  constructor() { }
}
