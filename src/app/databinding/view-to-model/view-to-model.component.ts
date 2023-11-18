import { Component } from '@angular/core';

@Component({
  selector: 'app-view-to-model',
  templateUrl: './view-to-model.component.html',
  styleUrls: ['./view-to-model.component.css']
})
export class ViewToModelComponent {
  counter: number = 1;
  increment() {
    ++this.counter;
  }
  decrement() {
    --this.counter;
  }

}
