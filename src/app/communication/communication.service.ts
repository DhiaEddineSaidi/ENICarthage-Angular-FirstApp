import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CommunicationService {
    subject: BehaviorSubject<String> = new BehaviorSubject<String>('')

    write(text:String){
        this.subject.next(text)
    }
    read(): BehaviorSubject<String>{
        return this.subject
    }
 
}
