import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mapromo = 'IF2';
  counter: number = 1;
  increment() {
    ++this.counter;
  }
  decrement() {
    --this.counter;
  }
}
