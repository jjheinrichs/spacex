import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spacex-launch-grid-title',
  templateUrl: './launch-grid-title.component.html'
})
export class LaunchGridTitleComponent implements OnInit {
  @Input() gridCellHeader: string;
  @Input() gridCellTitle: number;

  constructor() { }

  ngOnInit() {
  }

}
