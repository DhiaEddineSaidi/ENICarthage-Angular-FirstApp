import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html' ,
  styleUrls: ['./parent.component.css'],
  providers: [CommunicationService]
})
export class ParentComponent {

  constructor(private cs: CommunicationService){}
  
  speakToChild(){
    this.cs.write('')
  }
  currentItem = "smartphone"
  items = ['TV', 'smartWatch', 'Tablet'];
  addItem(newItem: string) {
    this.items.push(newItem)
  }
}
