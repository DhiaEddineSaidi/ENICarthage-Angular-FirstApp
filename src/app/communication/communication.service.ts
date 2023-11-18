import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommunicationService {
    subject: Subject<String> = new Subject<String>()

    write(text:String){
        this.subject.next(text)
    }
    read(): Subject<String>{
        return this.subject
    }
 
}
