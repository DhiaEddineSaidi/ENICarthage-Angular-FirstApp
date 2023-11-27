import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  subjectText : String = ''
  constructor(private cs: CommunicationService){
    console.log(this.subjectText)
  }

  ngOnInit(): void {
    this.cs.read().subscribe((data)=> this.subjectText = data)
  }

}
