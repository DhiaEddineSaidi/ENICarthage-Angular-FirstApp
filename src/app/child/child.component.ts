import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div>Your Item is : {{item}}</div>
              <label> Add an item : <input #newItem></label>
              <button (click)= "addNewItem(newItem.value)"> Add to parent's list</button>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() item: string = "" ;
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }

}
