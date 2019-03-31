import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spacex-launch-grid-description',
  templateUrl: './launch-grid-description.component.html'
})
export class LaunchGridDescriptionComponent implements OnInit {
  @Input() gridCellHeader: string;
  @Input() gridCellDescription: number;

  constructor() { }

  ngOnInit() {
  }

}
