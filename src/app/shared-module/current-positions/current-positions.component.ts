import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'current-positions',
  templateUrl: './current-positions.component.html',
})
export class CurrentPositionsComponent {

  @Input() positionList: string[];

}
