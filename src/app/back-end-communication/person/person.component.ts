import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/data-provider.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{
  providedData: Object = {}
  errorMessage!: string;
  passions = ['Dance', 'IT']
  constructor(private dp: DataProviderService) { }
  ngOnInit(): void {
    //this.providedData = JSON.stringify(this.dp.getMe())
    this.dp.getMe().subscribe((me) => {
        this.providedData = me
    })
  }
  addPassions(){
    if(this.providedData) {
      this.dp.updateME(Object.assign(this.providedData, {passions: this.passions}))

    } else {
      this.errorMessage = `Le BackEnd n'a pas repondu, merci de clicker une autre fois sur le bouton GetMe ! 
      Sinon contactez le service technique !`
    }

  }
  showBackEndData(){
    //  this.dp.getLocalBackEndData().subscribe((data)=> {
    //   this.providedData = JSON.stringify(data)
    // })
  }
}
