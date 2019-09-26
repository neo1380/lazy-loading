import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TabService {

  private subject = new Subject<any>();
  lazyModule:string;
  constructor() { }

  createTab(tab:any) {
    this.subject.next({ tab});
  }

  getTab(): Observable<any> {
    console.log(this.subject)
    return this.subject.asObservable();
  }

  setActiveModuleName(module:string):void{
    this.lazyModule = module;
  }

  getActiveModuleName():string{
    return this.lazyModule;
  }


}
