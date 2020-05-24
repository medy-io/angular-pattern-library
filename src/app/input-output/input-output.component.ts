import { Component, OnInit } from '@angular/core';
import { InputOutputParent } from './input-output-parent.interface';

@Component({
  selector: 'app-input-output-parent',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class ParentComponent implements OnInit {
  master = 'Master';
  heroes: InputOutputParent[] = [];


  ngOnInit() {
    console.log('hello june!');
    this.createData();

  }

  createData(): void {
    for (let i = 0; i < 50; i++) {
      const tempId = Math.floor(Math.random() * 10000);
      this.heroes.push(
        {
          id: tempId,
          name: tempId + ' | ' + 'Parent Object',
          list: [
            'a',
            'b',
            'c',
          ],
          on: false,
        }
      );
    }
  }

  logEvent(event): void {
    console.log('EVENT INSIDE PARENT');
    console.log(event);
  }

}
