import { Component, Input } from '@angular/core';

import { Launch } from '../models/launch';

@Component({
  selector: 'spacex-launch',
  templateUrl: './launch.component.html'
})
export class LaunchComponent {
  @Input() launch: Launch;

  constructor() {}

  preventDefaultIfNoPresskit($event: any) {
    if (!this.launch.presskit) {
      $event.preventDefault();
    }
  }

  get href() {
    return this.launch.presskit || '#';
  }
}
