import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputOutputParent } from './../input-output/input-output-parent.interface';

@Component({
  selector: 'app-input-output-child',
  templateUrl: './input-output-child.component.html',
  styleUrls: ['./input-output-child.component.css']
})
export class ChildComponent {
  @Input() hero: InputOutputParent;
  @Input() master: string;
  @Output() newItemEvent = new EventEmitter<InputOutputParent>();

  onClick(): void {
    this.newItemEvent.emit(this.hero);
  }
}
