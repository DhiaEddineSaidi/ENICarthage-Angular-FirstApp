import { Component, OnInit } from '@angular/core';

import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  providedData: Object = {}
  passions = ['Dance', 'IT']
  constructor(private dp: DataProviderService) { }
  ngOnInit(): void {
    this.providedData = JSON.stringify(this.dp.getLocalFrontEndData())
  }
  addPassions(){
    this.dp.updateLocalBackEndData(this.passions).subscribe((data)=>{
      console.log(data)
    })
  }
  showBackEndData(){
     this.dp.getLocalBackEndData().subscribe((data)=> {
      this.providedData = JSON.stringify(data)
    })
  }
}
