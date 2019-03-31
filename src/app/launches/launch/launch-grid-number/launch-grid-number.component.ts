import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spacex-launch-grid-number',
  templateUrl: './launch-grid-number.component.html'
})
export class LaunchGridNumberComponent implements OnInit {
  @Input() gridCellHeader: string;
  @Input() gridCellNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
