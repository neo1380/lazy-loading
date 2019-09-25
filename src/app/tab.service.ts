import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TabService {

  private subject = new Subject<any>();
  constructor() { }

  createTab(tab:any) {
    this.subject.next({ tab});
  }

  getTab(): Observable<any> {
    console.log(this.subject)
    return this.subject.asObservable();
  }

}
