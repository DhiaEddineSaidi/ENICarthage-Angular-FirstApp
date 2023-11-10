import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<app-child [item] ="currentItem" (newItemEvent)="addItem($event)"></app-child>
              <ul> 
                <li *ngFor="let item of items">{{item}}</li>
              </ul>`,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  currentItem = "smartphone"
  items = ['TV', 'smartWatch', 'Tablet'];
  addItem(newItem: string) {
    this.items.push(newItem)
  }
}
