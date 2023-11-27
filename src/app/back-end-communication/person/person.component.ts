import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/data-provider.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{
  persons!: Person[]; 
  errorMessage!: string;
  passions = ['Dance', 'IT']
  constructor(private dp: DataProviderService) { }
  ngOnInit(): void {
    //this.providedData = JSON.stringify(this.dp.getMe())
    
  }
  showBackEndData(){
    this.dp.getAllUsers().subscribe((data) => {
      this.persons = data
  })
  }
}
