import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html' ,
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {

  constructor(private cs: CommunicationService){}
  
  speakToHome(){
    this.cs.write('Bonjour je suis le composant parent')
  }
  currentItem = "smartphone"
  items = ['TV', 'smartWatch', 'Tablet'];
  addItem(newItem: string) {
    this.items.push(newItem)
  }
}
